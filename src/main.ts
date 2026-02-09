import './styles.css';
import { PeerClient } from './PeerClient';
import { Renderer } from './Renderer';
import { FaceTracker, type LandmarkStream } from './FaceTracker';
import { AvatarRenderer } from './AvatarRenderer';
import { FaceMeshBuilder } from './FaceMeshBuilder';
import { VideoInput } from './VideoInput';

console.log('🚀 main.ts loaded');

// Generate or read Room ID from URL (like Google Meet)
function getOrCreateRoomId(): string {
  const params = new URLSearchParams(window.location.search);
  let roomId = params.get('room');

  if (!roomId) {
    roomId = Math.random().toString(36).substring(2, 10);
    params.set('room', roomId);
    window.history.replaceState({}, '', `?${params.toString()}`);
  }

  return roomId;
}

// RemoteLandmarkStream: mínima implementación de LandmarkStream para datos remotos
class RemoteLandmarkStream implements LandmarkStream {
  readonly id = 'remote';
  readonly landmarkCount = 468; // MediaPipe FaceMesh
  private lm: Float32Array | null = null;
  private _isActive = false;

  set(lm: Float32Array): void {
    this.lm = lm;
    this._isActive = true;
  }

  getLatestLandmarks(): Float32Array | null {
    return this.lm;
  }

  isActive(): boolean {
    return this._isActive;
  }
}

// A) Crear cliente PeerClient
const peerClient = new PeerClient();

// DOM elements
const app = document.getElementById('app')!;
const startBtn = document.getElementById('startBtn') as HTMLButtonElement;
const callBtn = document.getElementById('callBtn') as HTMLButtonElement;
const hangupBtn = document.getElementById('hangupBtn') as HTMLButtonElement;
const localVideo = document.getElementById('localVideo') as HTMLVideoElement;
const remoteVideo = document.getElementById('remoteVideo') as HTMLVideoElement;
const overlayCanvas = document.getElementById('overlay') as HTMLCanvasElement;
const noteV = document.querySelector('#noteV') as HTMLElement;
const roomId = document.getElementById('roomId') as HTMLElement;
const peerIdEl = document.getElementById('peerId') as HTMLElement;

// Room ID from URL (like Google Meet)
const currentRoomId = getOrCreateRoomId();
roomId.textContent = currentRoomId;

// Show Peer ID when PeerClient connects (for sharing with the other user)
peerClient.onOpen = (id) => {
  noteV.textContent = `🔗 Share your Peer ID to connect: ${id}`;
  if (peerIdEl) peerIdEl.textContent = id;
};

// 3D Renderer setup
const renderer = new Renderer(overlayCanvas);
const meshBuilder = new FaceMeshBuilder();

// ✅ UN ÚNICO mesh en la escena (TU avatar)
const avatar = new AvatarRenderer(meshBuilder, {
  jawOpenAmount: 0.18,
  smoothingIterations: 1,
  smoothingAlpha: 0.14
});

renderer.scene.add(avatar.mesh);
// Ensure avatar is exactly centered in world space; tweak `y` for fine vertical placement.
avatar.mesh.position.set(0, 0, 0);
// Example adjustments (uncomment to nudge):
// avatar.mesh.position.y = 0.15; // slightly up
// avatar.mesh.position.y = -0.15; // slightly down

// Face tracking
const videoInput = new VideoInput();
const faceTracker = new FaceTracker({
  id: 'local',
  landmarkSmoothing: 0.75,
  refineLandmarks: false,
  selfieMode: true
});

// Local stream holder
let localStream: MediaStream | null = null;
let isRunning = false;

// Remote landmark stream (wrapper for DataChannel landmarks)
const remoteStream = new RemoteLandmarkStream();

// Helper: lerp
function lerp(prev: number, next: number, alpha: number): number {
  return prev + (next - prev) * alpha;
}

// Main render loop
async function renderLoop() {
  if (!isRunning) return;

  // ✅ CAPTURA: Process local face landmarks (SOLO para enviar)
  if (videoInput.video.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA) {
    faceTracker.processFrame(videoInput.video).catch((err) => {
      console.warn('FaceTracker error:', err);
    });
  }

  // ✅ RENDER: Animar avatar SOLO con landmarks REMOTOS
  avatar.updateFromStream(remoteStream, 0);

  // Render
  renderer.renderFrame();

  requestAnimationFrame(renderLoop);
}

// B) Botón Start: getUserMedia + init FaceTracker
startBtn.onclick = async () => {
  try {
    startBtn.disabled = true;
    noteV.textContent = '⏳ Starting camera...';

    // ✅ Solicitar video para FaceTracker (local, no se muestra) + audio
    localStream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' },
      audio: true
    });

    // Feed to FaceTracker (internal, hidden)
    videoInput.video.srcObject = localStream;
    await videoInput.video.play();

    // Init FaceTracker
    noteV.textContent = '⏳ Loading MediaPipe...';
    await faceTracker.init();

    // Setup canvas size
    const rect = overlayCanvas.parentElement?.getBoundingClientRect() || { width: 640, height: 480 };
    overlayCanvas.width = rect.width;
    overlayCanvas.height = rect.height;
    renderer.resize(rect.width, rect.height);

    // Start render loop
    isRunning = true;
    requestAnimationFrame(renderLoop);

    callBtn.disabled = false;
    noteV.textContent = '✅ Camera ready. Click "Call" to connect.';
  } catch (err) {
    noteV.textContent = `❌ Error: ${(err as Error)?.message}`;
    startBtn.disabled = false;
  }
};

// C) Botón Call: prompt for remote PeerID
callBtn.onclick = () => {
  const remoteId = prompt('🔗 Enter remote Peer ID:');
  if (!remoteId || !localStream) {
    noteV.textContent = '❌ No peer ID or stream';
    return;
  }

  try {
    peerClient.connect(remoteId);
    peerClient.callPeer(remoteId, localStream);

    // Wire up landmark sending
    const sendInterval = setInterval(() => {
      const landmarks = faceTracker.getLatestLandmarks();
      if (landmarks) {
        peerClient.sendFaceData({
          t: performance.now(),
          landmarks: Array.from(landmarks),
        });
      }
    }, 50); // Send every 50ms (~20Hz)

    // Stop on hangup
    hangupBtn.onclick = () => {
      clearInterval(sendInterval);
      peerClient.hangup();
      remoteVideo.srcObject = null;
      hangupBtn.disabled = true;
      callBtn.disabled = false;
      noteV.textContent = '❌ Call ended';
    };

    hangupBtn.disabled = false;
    callBtn.disabled = true;
    noteV.textContent = '📞 Calling...';
  } catch (err) {
    noteV.textContent = `❌ Call error: ${(err as Error)?.message}`;
  }
};

// D) Remote stream handler
peerClient.onRemoteStream = (stream) => {
  // ❌ NO mostramos video remoto (usamos avatar en su lugar)
  // remoteVideo.srcObject = stream;
  // remoteVideo.play().catch(() => {});
  console.log('📹 Remote stream received (not displayed, using avatar instead)');
};

// E) Landmarks received from remote peer → RENDERIZAR con estos landmarks
peerClient.onFaceData = (data) => {
  if (data?.landmarks) {
    try {
      remoteStream.set(new Float32Array(data.landmarks));
      console.log('📍 Remote landmarks received:', data.landmarks.length, 'points');
    } catch (err) {
      console.warn('Error processing remote landmarks:', err);
    }
  }
};

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
  isRunning = false;
  peerClient.hangup();
  localStream?.getTracks().forEach((t) => t.stop());
});

console.log('✅ App ready');
import './styles.css';
import { PeerClient } from './PeerClient';
import { Renderer } from './Renderer';
import { FaceTracker, type LandmarkStream } from './FaceTracker';
import { AvatarRenderer } from './AvatarRenderer';
import { FaceMeshBuilder } from './FaceMeshBuilder';
import { VideoInput } from './VideoInput';
import { capturePhotoFromCamera } from './PhotoCapture';

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
// Two canvases: one for Three.js (WebGL) and one for 2D overlay debugging
const threeCanvas = document.getElementById('threeCanvas') as HTMLCanvasElement;
const overlay2d = document.getElementById('overlay2d') as HTMLCanvasElement;
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

// 3D Renderer setup (pass the WebGL canvas)
const renderer = new Renderer(threeCanvas);
const meshBuilder = new FaceMeshBuilder();

avatar.mesh.position.set(0, 0, 0);

import * as THREE from 'three';
let faceTexture: THREE.CanvasTexture | null = null;
let avatarMaterial: THREE.MeshStandardMaterial | null = null;


const avatar = new AvatarRenderer(meshBuilder, {
  jawOpenAmount: 0.18,
  smoothingIterations: 1,
  smoothingAlpha: 0.14
});
avatar.mesh.position.set(0, 0, 0);
renderer.scene.add(avatar.mesh);

// --- INICIALIZACIÓN AL CARGAR LA PÁGINA ---
  // --- INICIALIZACIÓN AL CARGAR LA PÁGINA ---
// --- INICIALIZACIÓN AL CARGAR LA PÁGINA ---
(async function initializeAvatarWithPhoto() {
    // 1. Pedir cámara y tomar foto
    const stream = await navigator.mediaDevices.getUserMedia({ video: true });
    const video = document.createElement("video");
    video.srcObject = stream;
    video.autoplay = true;
    video.playsInline = true;
    await new Promise(resolve => {
        video.onloadedmetadata = () => resolve(true);
    });
    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d")!;
    ctx.drawImage(video, 0, 0);
    stream.getTracks().forEach(t => t.stop());

    // 2. Crear textura y aplicarla
    const texture = new THREE.CanvasTexture(canvas);
    texture.flipY = false;
    texture.needsUpdate = true;
    avatar.mesh.material = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide
    });
    avatar.mesh.material.needsUpdate = true;
    // Example adjustments (uncomment to nudge):
    // avatar.mesh.position.y = 0.15; // slightly up
    // avatar.mesh.position.y = -0.15; // slightly down
    noteV.textContent = '✅ Foto capturada. Haz click en "Iniciar cámara" para animar.';
    startBtn.disabled = false;
})();

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
  let originalLandmarks: { x: number; y: number }[] | undefined = undefined;
  if (videoInput.video.readyState === HTMLMediaElement.HAVE_ENOUGH_DATA) {
    faceTracker.processFrame(videoInput.video).catch((err) => {
      console.warn('FaceTracker error:', err);
    });
    // Get original MediaPipe landmarks for UVs
    const latest = faceTracker as any;
    if (latest && latest.faceMesh && latest.faceMesh.lastResults && latest.faceMesh.lastResults.multiFaceLandmarks) {
      const face = latest.faceMesh.lastResults.multiFaceLandmarks[0];
      if (face) {
        originalLandmarks = face.map((lm: any) => ({ x: lm.x, y: lm.y }));
      }
    }
  }

  // ✅ RENDER: Animar avatar con landmarks remotos o locales
  const remoteLandmarks = remoteStream.getLatestLandmarks();
  if (originalLandmarks) {
    // Attach to remoteStream for AvatarRenderer
    (remoteStream as any).originalLandmarks2D = originalLandmarks;
  }
  if (remoteLandmarks) {
    avatar.updateFromStream(remoteStream, 0);
  } else {
    avatar.updateFromStream(faceTracker, 0);
  }

  // Render
  renderer.renderFrame();

  // Debug overlay: draw remote landmarks (if present)
  // ...overlay2d removed: solo avatar 3D...

  requestAnimationFrame(renderLoop);
}

// B) Botón Start: getUserMedia + init FaceTracker
startBtn.onclick = async () => {
    try {
        startBtn.disabled = true;
        noteV.textContent = '⏳ Iniciando tracking facial...';

        // Solo tracking, no textura
        localStream = await navigator.mediaDevices.getUserMedia({
            video: { facingMode: 'user' },
            audio: true
        });
        videoInput.video.srcObject = localStream;
        await videoInput.video.play();

        noteV.textContent = '⏳ Cargando MediaPipe...';
        await faceTracker.init();

        const rect = threeCanvas.parentElement?.getBoundingClientRect() || { width: 640, height: 480 };
        threeCanvas.width = rect.width;
        threeCanvas.height = rect.height;
        overlay2d.width = rect.width;
        overlay2d.height = rect.height;
        renderer.resize(rect.width, rect.height);

        isRunning = true;
        requestAnimationFrame(renderLoop);

        callBtn.disabled = false;
        noteV.textContent = '✅ Tracking activo. Haz click en "Llamar" para conectar.';
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
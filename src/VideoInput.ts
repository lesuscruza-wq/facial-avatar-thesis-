export interface VideoInputOptions {
  // Smaller frames improve FaceMesh throughput; 640x480 is a typical balance.
  width: number;
  height: number;
  // Whether to request the front-facing camera when available.
  facingMode: 'user' | 'environment';
  // Desired frame rate. Actual FPS is a browser/device negotiation result.
  frameRate: number;
}

export class VideoInput {
  private readonly videoEl: HTMLVideoElement;
  private stream: MediaStream | null = null;

  public constructor() {
    this.videoEl = document.createElement('video');
    this.videoEl.autoplay = true;
    this.videoEl.playsInline = true;
    this.videoEl.muted = true; // no audio from the webcam stream
    this.videoEl.style.display = 'block';
    // We keep the raw (unmirrored) pixels for stable landmark indexing.
    // If you want a mirrored preview, mirror via CSS on a separate element.
  }

  public get video(): HTMLVideoElement {
    return this.videoEl;
  }

  public async start(options: VideoInputOptions): Promise<void> {
    // Stop any previous stream to avoid camera conflicts.
    this.stop();

    const constraints: MediaStreamConstraints = {
      video: {
        width: { ideal: options.width },
        height: { ideal: options.height },
        frameRate: { ideal: options.frameRate },
        facingMode: { ideal: options.facingMode }
      },
      audio: false
    };

    const stream = await navigator.mediaDevices.getUserMedia(constraints);
    this.stream = stream;
    this.videoEl.srcObject = stream;

    // Ensure metadata is loaded so videoWidth/videoHeight become valid.
    await new Promise<void>((resolve) => {
      const onLoaded = () => {
        this.videoEl.removeEventListener('loadedmetadata', onLoaded);
        resolve();
      };
      this.videoEl.addEventListener('loadedmetadata', onLoaded);
    });

    // Some browsers require an explicit play() even when autoplay=true.
    await this.videoEl.play();
  }

  public stop(): void {
    if (this.stream) {
      for (const track of this.stream.getTracks()) {
        track.stop();
      }
    }
    this.stream = null;
    this.videoEl.srcObject = null;
  }

  public getFrameSize(): { width: number; height: number } {
    // videoWidth/videoHeight are the decoded frame dimensions.
    // They may differ from the requested ideal constraints.
    const width = Math.max(1, this.videoEl.videoWidth || 0);
    const height = Math.max(1, this.videoEl.videoHeight || 0);
    return { width, height };
  }
}


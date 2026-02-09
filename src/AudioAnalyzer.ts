export interface AudioAnalyzerOptions {
  // Higher smoothing makes the mouth motion less jittery but more laggy.
  // A good thesis-friendly default is around 0.85–0.95.
  smoothing: number;
  // Energy scaling to convert RMS to a useful 0..1-ish range.
  gain: number;
}

export class AudioAnalyzer {
  private audioContext: AudioContext | null = null;
  private analyser: AnalyserNode | null = null;
  private micStream: MediaStream | null = null;
  private timeDomainBuffer: Float32Array | null = null;

  private smoothedEnergy = 0;
  private readonly smoothing: number;
  private readonly gain: number;

  public constructor(options: AudioAnalyzerOptions) {
    this.smoothing = clamp01(options.smoothing);
    this.gain = Math.max(0, options.gain);
  }

  public async start(): Promise<void> {
    this.stop();

    // Microphone permission must be requested from a user gesture in most browsers.
    const micStream = await navigator.mediaDevices.getUserMedia({
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        autoGainControl: true
      },
      video: false
    });
    this.micStream = micStream;

    // On Safari, AudioContext may be webkitAudioContext.
    const Ctor: typeof AudioContext =
      (window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    const audioContext = new Ctor();
    this.audioContext = audioContext;

    const src = audioContext.createMediaStreamSource(micStream);
    const analyser = audioContext.createAnalyser();
    // Time-domain RMS is stable for speech amplitude estimation.
    analyser.fftSize = 512;
    analyser.smoothingTimeConstant = 0.0; // we implement our own explicit smoothing
    src.connect(analyser);

    this.analyser = analyser;
    this.timeDomainBuffer = new Float32Array(analyser.fftSize);

    // iOS/Safari may start suspended; resume explicitly.
    await audioContext.resume();
  }

  /**
   * Initialize AudioAnalyzer from an existing MediaStream (instead of requesting a new microphone).
   * This avoids double-capturing from the microphone, which can cause focus lock on some browsers.
   */
  public async startFromStream(stream: MediaStream): Promise<void> {
    this.stop();

    this.micStream = stream;

    // On Safari, AudioContext may be webkitAudioContext.
    const Ctor: typeof AudioContext =
      (window.AudioContext ?? (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext);
    const audioContext = new Ctor();
    this.audioContext = audioContext;

    const src = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    // Time-domain RMS is stable for speech amplitude estimation.
    analyser.fftSize = 512;
    analyser.smoothingTimeConstant = 0.0; // we implement our own explicit smoothing
    src.connect(analyser);

    this.analyser = analyser;
    this.timeDomainBuffer = new Float32Array(analyser.fftSize);

    // iOS/Safari may start suspended; resume explicitly.
    await audioContext.resume();
  }

  public stop(): void {
    if (this.micStream) {
      for (const track of this.micStream.getTracks()) {
        track.stop();
      }
    }
    this.micStream = null;

    if (this.audioContext) {
      void this.audioContext.close();
    }
    this.audioContext = null;
    this.analyser = null;
    this.timeDomainBuffer = null;
    this.smoothedEnergy = 0;
  }
  
  public getLocalStream(): MediaStream | null {
    return this.micStream;
  }

  /**
   * Returns a smoothed energy estimate in roughly [0, 1] for normal speech.
   * The value is not a physical SPL; it is a robust control signal for animation.
   */
  public getEnergy(): number {
    const analyser = this.analyser;
    if (!analyser) return 0;

    // Ensure we have a valid Float32Array buffer to receive time-domain data.
    let buf = this.timeDomainBuffer;
    if (!buf) {
      buf = new Float32Array(analyser.fftSize);
      this.timeDomainBuffer = buf;
    }

    try {
      analyser.getFloatTimeDomainData(buf as Float32Array<ArrayBuffer>);
    } catch (err) {
      console.error('AudioAnalyzer.getEnergy() failed to read time domain data', err, {
        analyser, bufferLength: buf.length
      });
      return 0;
    }

    // RMS amplitude: sqrt(mean(x^2)). For normalized audio samples x ∈ [-1, 1].
    let sumSq = 0;
    for (let i = 0; i < buf.length; i++) {
      const x = buf[i] ?? 0;
      sumSq += x * x;
    }
    const rms = Math.sqrt(sumSq / buf.length);

    // Convert to a stable control signal and clamp.
    const raw = clamp01(rms * this.gain);

    // Exponential smoothing:
    // y[n] = a*y[n-1] + (1-a)*x[n]
    this.smoothedEnergy = this.smoothing * this.smoothedEnergy + (1 - this.smoothing) * raw;
    return this.smoothedEnergy;
  }
}

function clamp01(v: number): number {
  if (v < 0) return 0;
  if (v > 1) return 1;
  return v;
}


declare module '@mediapipe/face_mesh' {
  export interface NormalizedLandmark {
    x: number;
    y: number;
    z: number;
    visibility?: number;
  }

  export interface Results {
    // MediaPipe JS typically provides this when maxNumFaces >= 1
    multiFaceLandmarks?: NormalizedLandmark[][];
    // The input image that produced the result (useful for debugging)
    image: CanvasImageSource;
  }

  export interface FaceMeshConstructorOptions {
    locateFile?: (file: string) => string;
  }

  export interface FaceMeshOptions {
    maxNumFaces?: number;
    refineLandmarks?: boolean;
    minDetectionConfidence?: number;
    minTrackingConfidence?: number;
    selfieMode?: boolean;
  }

  export class FaceMesh {
    constructor(options?: FaceMeshConstructorOptions);
    setOptions(options: FaceMeshOptions): void;
    onResults(cb: (results: Results) => void): void;
    send(input: { image: CanvasImageSource }): Promise<void>;
    close(): void;
  }
}


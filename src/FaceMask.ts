import * as THREE from "three";
import { FaceLandmarker, FilesetResolver } from "@mediapipe/tasks-vision";

export class FaceMask {
  mesh: THREE.Mesh;

  constructor() {}

  async buildFromImage(image: HTMLImageElement) {
    const filesetResolver = await FilesetResolver.forVisionTasks(
      "https://cdn.jsdelivr.net/npm/@mediapipe/tasks-vision@latest/wasm"
    );

    const faceLandmarker = await FaceLandmarker.createFromOptions(
      filesetResolver,
      {
        baseOptions: {
          modelAssetPath:
            "https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task",
        },
        runningMode: "IMAGE",
        numFaces: 1,
      }
    );

    const result = faceLandmarker.detect(image);

    if (!result.faceLandmarks?.length) {
      throw new Error("No se detectó rostro");
    }

    const landmarks = result.faceLandmarks[0];

    // Construir geometría
    const geometry = new THREE.BufferGeometry();

    const vertices = new Float32Array(landmarks.length * 3);
    const uvs = new Float32Array(landmarks.length * 2);

    landmarks.forEach((lm, i) => {
      vertices[i * 3] = (lm.x - 0.5) * 2;
      vertices[i * 3 + 1] = -(lm.y - 0.5) * 2;
      vertices[i * 3 + 2] = -lm.z * 2;

      uvs[i * 2] = lm.x;
      uvs[i * 2 + 1] = 1 - lm.y;
    });

    geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3));
    geometry.setAttribute("uv", new THREE.BufferAttribute(uvs, 2));

    // TRIÁNGULOS OFICIALES DE MEDIAPIPE
    const TRIANGLES = (window as any).FACE_MESH_TESSELATION;

    if (!TRIANGLES) {
      console.error("Necesitas incluir face_mesh_connections.js");
    }

    const indices: number[] = [];
    TRIANGLES.forEach((tri: number[]) => {
      indices.push(tri[0], tri[1], tri[2]);
    });

    geometry.setIndex(indices);
    geometry.computeVertexNormals();

    const texture = new THREE.Texture(image);
    texture.needsUpdate = true;

    const material = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide,
    });

    this.mesh = new THREE.Mesh(geometry, material);
    return this.mesh;
  }
}

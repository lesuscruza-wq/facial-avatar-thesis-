/**
 * Client helpers to call the Google Vision API proxy.
 * The server expects a POST with raw image bytes (octet-stream) at:
 *  - /api/face/analyze (FACE_DETECTION)
 *  - /api/image/analyze (LABEL_DETECTION, OBJECT_LOCALIZATION)
 */

const PROXY_BASE = (typeof window !== 'undefined' && (window as any).__VISION_PROXY_URL) || 'http://localhost:3000';

export async function postImageAsArrayBuffer(path: string, blob: Blob) {
  const arr = await blob.arrayBuffer();
  const url = `${PROXY_BASE}${path}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/octet-stream' },
    body: arr,
  });
  if (!res.ok) throw new Error(`Server error: ${res.status}`);
  return await res.json();
}

export async function analyzeFace(blob: Blob) {
  return await postImageAsArrayBuffer('/api/face/analyze', blob);
}

export async function analyzeImage(blob: Blob) {
  return await postImageAsArrayBuffer('/api/image/analyze', blob);
}

export default { analyzeFace, analyzeImage };

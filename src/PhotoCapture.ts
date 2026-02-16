// PhotoCapture.ts
// Utilidad para capturar una foto de la cámara y devolverla como un canvas

export async function capturePhotoFromCamera(): Promise<HTMLCanvasElement> {
  const video = document.createElement("video");
  video.autoplay = true;
  video.playsInline = true;

  const stream = await navigator.mediaDevices.getUserMedia({ video: true });
  video.srcObject = stream;

  await new Promise(resolve => {
    video.onloadedmetadata = () => resolve(true);
  });

  const canvas = document.createElement("canvas");
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  const ctx = canvas.getContext("2d")!;
  ctx.drawImage(video, 0, 0);

  // Apagar cámara preview
  stream.getTracks().forEach(t => t.stop());

  return canvas;
}

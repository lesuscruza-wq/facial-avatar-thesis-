import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 4000;

// CORS
app.use(cors());

// Permite recibir imágenes como binario
app.use('/api', express.raw({ type: 'application/octet-stream', limit: '10mb' }));

// 🔐 VARIABLES DE ENTORNO (NO KEYS DIRECTAS)
const FACE_ENDPOINT = process.env.AZURE_FACE_ENDPOINT;
const FACE_KEY = process.env.AZURE_FACE_KEY;
const VISION_ENDPOINT = process.env.AZURE_VISION_ENDPOINT;
const VISION_KEY = process.env.AZURE_VISION_KEY;

function ensureAzureConfig() {
  if (!FACE_ENDPOINT || !FACE_KEY) throw new Error('Azure Face endpoint or key not set (AZURE_FACE_ENDPOINT, AZURE_FACE_KEY)');
  if (!VISION_ENDPOINT || !VISION_KEY) throw new Error('Azure Vision endpoint or key not set (AZURE_VISION_ENDPOINT, AZURE_VISION_KEY)');
}

// ---------- FACE API ----------
app.post('/api/face/recognize', async (req, res) => {
  try {
    const imageBuffer = req.body;

    const url =
      `${FACE_ENDPOINT.replace(/\/$/, '')}` +
      `/face/v1.0/detect` +
      `?returnFaceId=true` +
      `&returnFaceLandmarks=false` +
      `&returnFaceAttributes=age,gender,smile,emotion`;

    const r = await fetch(url, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': FACE_KEY,
        'Content-Type': 'application/octet-stream'
      },
      body: imageBuffer
    });

    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error('Face API error:', err);
    res.status(500).json({ error: String(err) });
  }
});

// ---------- VISION API ----------
app.post('/api/vision/analyze', async (req, res) => {
  try {
    const imageBuffer = req.body;

    const url =
      `${VISION_ENDPOINT.replace(/\/$/, '')}` +
      `/vision/v3.2/analyze?visualFeatures=Description,Tags,Objects`;

    const r = await fetch(url, {
      method: 'POST',
      headers: {
        'Ocp-Apim-Subscription-Key': VISION_KEY,
        'Content-Type': 'application/octet-stream'
      },
      body: imageBuffer
    });

    const data = await r.json();
    res.json(data);
  } catch (err) {
    console.error('Vision API error:', err);
    res.status(500).json({ error: String(err) });
  }
});

// ---------- START SERVER ----------
app.listen(PORT, () => {
  console.log(`✅ Azure proxy running on http://localhost:${PORT}`);
});
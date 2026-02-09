import http from 'http';
import { URL } from 'url';
import 'dotenv/config';

const GOOGLE_VISION_KEY = process.env.GOOGLE_VISION_KEY;

if (!GOOGLE_VISION_KEY) {
  throw new Error('Set GOOGLE_VISION_KEY in .env');
}

function jsonResponse(res, status, body) {
  res.writeHead(status, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(body));
}

function parseBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on('data', c => chunks.push(c));
    req.on('end', () => resolve(Buffer.concat(chunks)));
    req.on('error', reject);
  });
}

async function callVisionAPI(imageBuffer, features) {
  const base64 = imageBuffer.toString('base64');

  const body = {
    requests: [{
      image: { content: base64 },
      features
    }]
  };

  const r = await fetch(
    `https://vision.googleapis.com/v1/images:annotate?key=${GOOGLE_VISION_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }
  );

  return await r.json();
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url ?? '/', `http://${req.headers.host}`);

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    res.writeHead(204);
    return res.end();
  }

  if (req.method === 'POST' && url.pathname === '/api/face/analyze') {
    const buf = await parseBody(req);
    const result = await callVisionAPI(buf, [
      { type: 'FACE_DETECTION' }
    ]);
    return jsonResponse(res, 200, result);
  }

  if (req.method === 'POST' && url.pathname === '/api/image/analyze') {
    const buf = await parseBody(req);
    const result = await callVisionAPI(buf, [
      { type: 'LABEL_DETECTION' },
      { type: 'OBJECT_LOCALIZATION' }
    ]);
    return jsonResponse(res, 200, result);
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(4000, () =>
  console.log('Google Vision proxy running on http://localhost:4000')
);

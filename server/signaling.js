import WebSocket, { WebSocketServer } from 'ws';

const port = process.env.PORT || 3000;
const wss = new WebSocketServer({ port });

let clientId = 0;

wss.on('connection', (ws) => {
  // attach a numeric id for simple debugging/routing
  ws.id = ++clientId;
  console.log('Client connected: ${ws.id}');

  ws.on('message', (message) => {
    // Relay incoming signaling messages to all other clients
    try {
      const msg = JSON.parse(message.toString());
      // Attach sender id
      msg.from = ws.id;
      const out = JSON.stringify(msg);
      wss.clients.forEach((c) => {
        if (c !== ws && c.readyState === WebSocket.OPEN) {
          c.send(out);
        }
      });
    } catch (e) {
      console.error('Invalid message', e);
    }
  });

  ws.on('close', () => {
    console.log('Client disconnected: ${ws.id}');
  });
});

console.log('Signaling server running on ws://localhost:${port}');

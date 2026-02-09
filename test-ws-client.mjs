import { WebSocket } from 'ws';

const url = 'ws://localhost:3000/ws';
console.log('Connecting to', url);

const ws = new WebSocket(url);

ws.on('open', () => {
  console.log('Client: open');
  ws.send('hello-from-client');
});

ws.on('message', (msg) => {
  console.log('Client: received ->', msg.toString());
  ws.close();
  process.exit(0);
});

ws.on('error', (err) => {
  console.error('Client: error', err);
  process.exit(1);
});

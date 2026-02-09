import http from "http";
import { WebSocketServer } from "ws";

const server = http.createServer();

const wss = new WebSocketServer({
  server,
  path: "/ws"
});

wss.on("connection", (ws) => {
  console.log("WS conectado");

  ws.on("message", (msg) => {
    ws.send(msg); // echo for now
  });
});

server.listen(3000, () => {
  console.log("Signaling WS en http://localhost:3000/ws");
});

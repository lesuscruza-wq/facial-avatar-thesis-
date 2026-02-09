import Peer, { DataConnection, MediaConnection } from 'peerjs';

export class PeerClient {
  peer: Peer;
  id: string | null = null;
  conn?: DataConnection;
  call?: MediaConnection;

  onOpen?: (id: string) => void;
  onRemoteStream?: (s: MediaStream) => void;
  onFaceData?: (data: any) => void;

  constructor() {
    this.peer = new Peer(undefined as unknown as string, {
      host: '0.peerjs.com',
      secure: true,
      port: 443
    });

    this.peer.on('open', (id) => {
      this.id = id;
      console.log('🔗 My Peer ID:', id);
      this.onOpen?.(id);
    });

    this.peer.on('call', (call) => {
      // ✅ Solo audio (video is for local FaceMesh, not for WebRTC)
      navigator.mediaDevices.getUserMedia({ audio: true }).then((stream) => {
        call.answer(stream);
        call.on('stream', (s: MediaStream) => this.onRemoteStream?.(s));
      });
    });

    this.peer.on('connection', (conn) => {
      this.conn = conn;
      conn.on('data', (d: any) => this.onFaceData?.(d));
    });
  }

  connect(remoteId: string) {
    this.conn = this.peer.connect(remoteId);
    this.conn.on('data', (d: any) => this.onFaceData?.(d));
  }

  callPeer(remoteId: string, stream: MediaStream) {
    this.call = this.peer.call(remoteId, stream);
    this.call.on('stream', (s: MediaStream) => this.onRemoteStream?.(s));
  }

  sendFaceData(data: any) {
    if (this.conn?.open) {
      this.conn.send(data);
    }
  }

  hangup() {
    try {
      this.call?.close();
    } catch (e) {}
    try {
      this.conn?.close();
    } catch (e) {}
    this.call = undefined;
    this.conn = undefined;
  }
}

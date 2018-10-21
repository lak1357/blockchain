const WebSocket = require('ws');

const P2P_PORT = process.env.P2P_PORT || 5001;
const peers = process.env.PEERS ? process.env.PEERS.split(',') : [];


class P2pServer {
    constructor(blockchain) {
        this.blockchain = blockchain;
        this.sockets = [];
    }

    listen() {
        const server = new WebSocket.Server({ port: P2P_PORT });
        server.on('connection', socket => this.connectSoket(socket));
        console.log(`Listning to p2p connection on : ${P2P_PORT}`);
        this.connectToPeers();
    }

    connectSoket(socket) {
        this.sockets.push(socket);
        console.log('Soket connected');
    }

    connectToPeers() {
        peers.forEach(peer => {
            const socket = new WebSocket(peer);
            socket.on('open', () => this.connectSoket(socket));
        });
    }
}

module.exports = P2pServer;
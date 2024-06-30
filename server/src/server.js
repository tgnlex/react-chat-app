import {createServer} from 'http';
import {WebSocketServer} from 'ws';
import {app} from './api.js';
import {connection} from './ws.js';
import {health} from './lib/health.js';

const server = createServer(app);
const wss = new WebSocketServer({server});
const connInterval = setInterval(health, 50000);

wss.on('connection', connection);
wss.on('close', function cleanup() {
  clearInterval(connInterval);
});

function upgrade(req, socket, head) {
  wss.handleUpgrade(request, socket, head, socket => {
    wss.emit('connection', socket, request)
  }
}


function start() {
  server.listen(3000)
  server.on('upgrade', upgrade)
  console.log('Server listening on port 3000') 
}

start();

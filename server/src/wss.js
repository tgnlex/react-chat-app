import {uuidv4} from 'uuid';
import {heartbeat} from './lib/health.js';
import {update, handleMessage} from './lib/chat.js';

const messages = [];
const clients = {};

function socketError(err) {
  console.error(err);
}
function handleClient(connection) {
  const clientID = uuidv4();
  const clientIP = req.socket.remoteAddress
  const newClient = {
    id: clientID,
    ip: clientIP
  }
  clients[newClient] = connection;
  console.log(`${newClient.id} connected`)
}
function open(ip) {
  console.log(`${ip} connected.`);
  ws.send(Date.now);
}
function close(ip) {
  console.log(`${ip} disconnected.`)
}
function connection(ws, req) {
  ws.isAlive = true;
  const clientIP = req.socket.remoteAddress;
  handleClient(clientIP);
  ws.on('open', open(clientIP));
  ws.on('error', socketError);
  ws.on('ping', heartbeat);
  ws.on('message', handleMessage);
  ws.on('close', close(clientIP));
}

export {connection, messages, clients}

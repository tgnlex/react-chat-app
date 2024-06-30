function heartbeat() {
  this.isAlive = true;
}

function connectionCheck(ws) {
  if (ws.isAlive === false) {
    return ws.terminate();
  } 
  ws.isAlive = true;
  ws.ping();
}

function health(wss) {
  wss.clients.forEach(connectionCheck)
}


export {health, heartbeat};

function update(client) {
  if(client !== ws && client.readyState === WebSocket.OPEN) {
    client.send(messages);
  }
}
function handleMessage(data) {
  messages.push(data);
  wss.clients.forEach(update(client))
}

export {update, handleMessage};


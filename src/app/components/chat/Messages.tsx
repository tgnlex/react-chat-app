const messages = [
  { id: 1, content: 'lorem ipsum'}
]
function Messages() {
  return (
    <ul>
      {messages.map((message) => (
        <li key={message.id}>{message.content}</li>
      ))}
    </ul>
  )
}

export {Messages};
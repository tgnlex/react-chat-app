function MessageForm() {
  return (
    <form id="message-form" method="post" action='localhost:4000/messages/new'>
      <textarea id="input-box" cols={20}/>
      <button id='send-btn' type='submit'>Send</button>
    </form>
  )
}

export {MessageForm};
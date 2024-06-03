import { Layout } from "./components/Layout";
// Dummy messages to use until server is set up
const messages = [
  { id: 1, content: 'lorem ipsum'}
]

const Chat = () => {
  return (
    <Layout>
      <main id='chat'>
        <div id="chat-window">
          <ul>
          {messages.map((message) => (
            <li key={message.id}>{message.content}</li>
          ))}
          </ul>
        </div>
        <form id="message-form" method="post" action='localhost:4000/messages/new'>
          <textarea id="input-box" cols={20}/>
          <button id='send-btn' type='submit'>Send</button>
        </form>
      </main>
    </Layout>
  )
}

export {Chat};
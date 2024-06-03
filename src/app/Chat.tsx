import { Layout } from "./components/Layout";
import { MessageForm } from "./components/chat/Form";
import {Messages} from './components/chat/Messages';
// Dummy messages to use until server is set up


const Chat = () => {
  return (
    <Layout>
      <div id='chat'>
        <div id="chat-window">
          <Messages />
        </div>
       <MessageForm />
      </div>
    </Layout>
  )
}

export {Chat};
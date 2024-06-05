import { Layout } from "../components/Layout";
import { MessageForm } from "../components/chat/Form";
import {ChatWindow} from '../components/chat/Window';


const Chat = () => {
  return (
    <Layout>
      <div id='chat'>
       <ChatWindow />
       <MessageForm />
      </div>
    </Layout>
  )
}

export {Chat};
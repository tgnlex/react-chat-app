import { Layout } from "../components/Layout";
import { MessageForm } from "./chat/Form";
import { ChatWindow } from './chat/Window';


const Chat = () => {
  const [messages, setMessages] = useState([])
  const [newMessage, setNewMessage] = useState('')
   async function handleMessage () {
    sendMessage()
    .then(response => {
      setMessages([...messages, response.data])
    })
    .catch(err => console.error(err));
  };
}

  return (
    <Layout>
      <div id='chat'>
        <ChatWindow />
        <MessageForm 
				  handler={handleMessage} 
				  inputValue={newMessage}
				  change={(e) => setNewMessage(e.target.value)}
        />
      </div>
    </Layout>
  )
}

export {Chat};

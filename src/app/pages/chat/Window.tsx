import {Message} from './Message';
import type {MessageModel} from '../../../types/message.ts';
interface PropType {
  messages: Message[];
}
function ChatWindow(props:PropType) {
  return (
    <div id="window">
			{props.messages.map(message => (
			  <Message key={message.id} text={message.text} />
			))}
    </div>
  )
}
export {ChatWindow};

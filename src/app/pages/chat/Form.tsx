import {useState} from 'react';
interface PropType {
  handler: () => any,
  change: () => void,
  inputValue: () => void
}
function MessageForm(props: PropType) {
  return (
    <form id="message-form">
      <textarea 
				id="input-box" 
				value={props.inputValue}
				onChange={props.change}
				cols={20}
       />
      <button id='send-btn' onClick={props.handler} type='submit'>Send</button>
    </form>
  )
}

export {MessageForm};

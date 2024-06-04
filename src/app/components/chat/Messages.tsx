import {Map} from '../../lib/Map';
const messages = [
  { id: 1, content: 'lorem ipsum'}
]

function Messages() {
  return (
    <ul>
      <Map items={messages} />
    </ul>
  )
}

export {Messages};
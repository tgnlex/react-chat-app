import {Map} from '../../lib/Map';
// Dummy messages to use until server is set up

const messages = [
  { id: 1, 
    content: { 
      sender: "fake user",
      body: "lorem ipsum",
      date: `${Date.now()}`
    }
  },
  { id: 2,  
    content: { 
      sender: "fake user",
      body: "ipsum lorem",
      date: `${Date.now()}`
    }
  }
]

function Messages() {
  return (
    <ul>
      <Map items={messages} />
    </ul>
  )
}

export {Messages};
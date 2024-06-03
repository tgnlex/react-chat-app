
import {Link} from 'react-router-dom'
import { Layout } from './components/Layout';
function Home() {
  return (
    <Layout>
      <main>
        <h1>Welcome</h1>
        <p>First time ?</p>
        <Link to='/register'>Click here to signup!</Link>
      </main>
    </Layout>
  
  )
}

export {Home};
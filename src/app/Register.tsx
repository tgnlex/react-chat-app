import {Layout} from './components/Layout';
function Register() {
  return (
    <Layout>
    <main>
      <h1>Register</h1>
      <form>
        <label htmlFor=""></label>
        <input name='nick' id="nickname" type="text" />
        <label htmlFor=""></label>
        <input name='email' id='email'   type="email" />
        <label htmlFor=""></label>
        <input name='age' id='age' type='number'/>
        <label htmlFor=""></label>
        <input name='pass1' id="password" type="password" />
        <label htmlFor=""></label>
        <input name='pass2' id='password2' type="password" />
      </form>
    </main>
    </Layout>
  )
}

export {Register};
import {Layout} from '../Layout';
function Register() {
  return (
    <Layout>
    <main>
      <h1>Register</h1>
      <form>
        <label htmlFor="">Nickname</label>
        <input name='nick' id="nickname" type="text" />
        <label htmlFor="">Email</label>
        <input name='email' id='email'   type="email" />
        <label htmlFor="">Password</label>
        <input name='pass1' id="password" type="password" />
        <label htmlFor="">Confirm Password</label>
        <input name='pass2' id='password2' type="password" />
        <label htmlFor="">Age</label>
        <input name='age' id='age' type='number'/>
        <input type='submit' />
      </form>
    </main>
    </Layout>
  )
}

export {Register};
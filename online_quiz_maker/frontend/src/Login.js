import loginimg from '../src/loginImage.jpg'
import './Login.css';

function Login(){
    return (
        <div className='grid-container'>

        <div className='exp'>
          <img className='img' src={loginimg} alt='img'></img>
        </div> 
  
        <div className='sign'>
          <h1 className='login-h1'>Sign in</h1>

          <div className='wrapper-div'>
            <form>
              <label for='email'>Email :</label>
              <input type='email' id='email' name='email'></input>
              <label for='pass'>Password :</label>
              <input type='password' id='pass' name='password'></input>
              <a href='forgotPass'>forgot password</a>
              <button type='submit'>Sign in</button>
            </form>
          </div>
          
        </div>
  
      </div>
    );
}

export default Login; 
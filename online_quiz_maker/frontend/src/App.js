import { useState } from 'react';
import './App.css';

function App() {
  
  const [userCred,setUserCred] = useState({email:"",password:""});
  
  const login=()=>{

  }

  return (
    <div>
      <form>
        <input type='email' placeholder='user@gmail.com' ></input><br/>
        <input type='password' placeholder='password' ></input><br/>
        <button type='submit' onClick={login}>Submit</button>
      </form>
    </div>
  );
}

export default App;

import React, { useContext, useEffect, useState } from 'react';
import Nav1 from '../components/nav1';
import Footer from '../components/footer';
import './style/login.css'


const UsernameContext = React.createContext();


function Login() {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [registedUser, setRegistedUser] = useState(null);

  const handleLogin = (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    setRegistedUser(username);
    console.log(registedUser);
  }

  const HandleUsernameInput = (event) =>{
    event.preventDefault();
    setUsername(event.target.value);
  }

  const HandlePasswordInput = (event) =>{
    event.preventDefault();
    setPassword(event.target.value);
  }
  

  return (
    <div>
      <UsernameContext.Provider value = {registedUser ? (registedUser) : (null)}>
      <Nav1 />
      </UsernameContext.Provider>
      
        <div class = "header">
        <img  class = "userLogo" src={`${process.env.PUBLIC_URL}/assets/user1.png`} alt="user" />
        <label>Administrator Log In</label>
        </div>

      <div class = "page-container">
        <div class = "login-container">
            
            <div class = "header">
            Administrator Log In
            </div>

            <div id = "username">

            </div>

      
            <form class = "form" id = "form" onSubmit = {handleLogin}>
              <div>Username:</div>

              <div class = "center" >
                <input type="text" placeholder="username" id = "username" required onChange={HandleUsernameInput}/>
              </div>

              <div>Password:</div>

              <div class = "center" >
              <input type="text" placeholder="password" id = "password" required onChange={HandlePasswordInput}/>
              </div>

              <div class = "center">
                <button class = "submitButton">
                  log in
                </button>
              </div>

            </form>

        </div>
      </div>


      <Footer />
    </div>
  );
}

export { UsernameContext };
export default Login;

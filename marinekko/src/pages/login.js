import React, { useEffect, useState } from 'react';
import Nav1 from '../components/nav1';
import Header from '../components/header';
import Footer from '../components/footer';
import './style/login.css'



function Login() {

  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  // const [isLogIn,setIsLogIn] = useState(false);
  const [registedUser, setRegistedUser] = useState(null);

  // useEffect(() => {
  //   fetch('http://localhost:2999/getUser_api')
  //   .then(res => res.json())
  //   .then(data => {setRegistedUser(data)});
  // },[isLogIn])

  const handleLogin = () => {

    const unverifiedUser = {userName : username,passWord : password};
    // fetch('http://localhost:2999/login_api', 
    // { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
    // body: JSON.stringify(unverifiedUser)})
    // .then(setIsLogIn(!isLogIn))
    // .catch(error => console.error(error));
    
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

      <Header />
      <Nav1 />
      {/*!registedUser?(<div>no user</div>):(<div>{registedUser}</div>)*/}
      <div class = "header_">
        <img  class = "userLogo" src={`${process.env.PUBLIC_URL}/assets/user1.png`} alt="user" />
        <label>Administrator Log In</label>
      </div>

      <div class = "page-container-login">
        <div class = "login-container">

          
            
            <div class = "header">
            Administrator Log In
            </div>

            <div id = "username">

            </div>

      
            <form class = "form" id = "form" onSubmit = {() => {handleLogin()}}>
              <div>Username:</div>

              <div class = "center" >
                <input type="text" placeholder= "username" id = "username" required onChange={HandleUsernameInput}/>
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

export default Login;

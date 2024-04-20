import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav2 from '../components/nav2';
import Header from '../components/header';
import Footer from '../components/footer';
import './style/login.css'



function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState('');
  // const [registedUser, setRegistedUser] = useState(null);



  const handleLogin = () => {

    const unverifiedUser = {userName : username,passWord : password};
    fetch('http://localhost:2999/login_api', 
    { method: 'POST', headers: { 'Content-Type': 'application/json' }, 
    body: JSON.stringify(unverifiedUser)})
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Login successful') {
        console.log('Login successful', data.user);
        localStorage.setItem('isLoggedIn', 'true'); // Store login state
        navigate('/login-success'); // Change to desired routeๅ
      } else {
        console.error('Login failed');
        setError('Login Failed: ' + data.message);  // Set error message
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setError('Login Failed: ' + error.message);  // Set error message
    });
    
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
      <Nav2 />
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

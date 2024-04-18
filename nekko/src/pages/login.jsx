import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav1 from './components/nav1';
import Footer from './components/footer';
import Header from './components/header';

function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');  // Define error state

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/login-success');
    }
  }, [navigate]);

  const handleLogin = (event) => {
    event.preventDefault();
    const userCredentials = { username, password };
    fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userCredentials)
    })
    .then(response => response.json())
    .then(data => {
      if (data.message === 'Login successful') {
        console.log('Login successful', data.user);
        localStorage.setItem('isLoggedIn', 'true'); // Store login state
        navigate('/login-success'); // Change to desired route
      } else {
        console.error('Login failed');
        setError('Login Failed: ' + data.message);  // Set error message
      }
    })
    .catch(error => {
      console.error('Error:', error);
      setError('Login Failed: ' + error.message);  // Set error message
    });
  };

  return (
    <div>
      <Header />
      <Nav1 />
      <div className="header_">
        <img className="userLogo" src="/assets/user1.png" alt="user" /> {/* Corrected the path */}
        <label>Administrator Log In</label>
      </div>
      <div className="page-container-login">
        <div className="login-container">
          <div className="header">Administrator Log In</div>
          <form className="form" id="form" onSubmit={handleLogin}>
            <div>Username:</div>
            <div className="center">
              <input type="text" placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)} required />
            </div>
            <div>Password:</div>
            <div className="center">
              <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </div>
            <div className="center">
              <button className="submitButton" type="submit">Log In</button>
            </div>
          </form>
          {error && <div className="error">{error}</div>}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

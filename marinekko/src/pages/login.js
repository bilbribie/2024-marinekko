import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav1 from '../components/nav1';
import Footer from '../components/footer';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    navigate('/');
  };

  return (
    <div>
      <Nav1 />
      <div className="login-container">
        <img src={`${process.env.PUBLIC_URL}/assets/user1.png`} alt="user" />
        <h2>Administrator Log In</h2>
        <form onSubmit={handleLogin}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              id="username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default Login;

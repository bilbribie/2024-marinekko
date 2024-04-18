import React from 'react';
import { useNavigate } from 'react-router-dom';
import Nav1 from './components/nav1';
import Footer from './components/footer';
import Header from './components/header';

function LoginSuccess() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear the login state
    navigate('/login'); // Redirect to the login page
  };

  return (
    <div>
      <Header />
      <Nav1 />
      <div className="page-container-login"> {/* Use the same container for style consistency */}
        <div className="login-container"> {/* Reuse login-container for similar styling */}
          <div className="header">Login Successful</div>
          <div className="form">
            <h1>Welcome!</h1>
            <p>You are now logged into the system. Navigate through the dashboard as needed.</p>
            <button className="submitButton" onClick={handleLogout}>Log Out</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LoginSuccess;

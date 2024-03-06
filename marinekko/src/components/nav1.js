import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Nav1() {
  const navigate = useNavigate();

  const handleSearchIconClick = (event) => {
    event.preventDefault(); 
    navigate('/search');
  };

  return (
    <nav>
      <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
      <Link to="/login">Login</Link><br />
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/ourteam">Our Team</Link>
      <div>
        <input type="text" placeholder="Search..." />
        <button>
          <img 
              src={`${process.env.PUBLIC_URL}/assets/search.png`} 
              alt="Search" 
              onClick={handleSearchIconClick} // Attach the click handler here
          />
        </button>
      </div>
    </nav>
  );
}

export default Nav1;
import React from 'react';
import { Link } from 'react-router-dom';

function Nav2() {
  return (
    <nav>
      <img src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo" />
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
      <Link to="/search">Search</Link>
      <Link to="/ourteam">Our Team</Link>
    </nav>
  );
}

export default Nav2;
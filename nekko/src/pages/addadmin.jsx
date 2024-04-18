// addadmin.jsx
import React, { useState } from 'react';
import Header from './components/header';
import Nav2 from './components/nav2';
import Footer from './components/footer';
import { useNavigate } from 'react-router-dom';
import './style/addadmin.css';

function AddAdmin() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminData = { username, firstName, lastName, email, password };
    // Post request to API to add a new admin
    fetch('http://localhost:3001/api/adminaccount', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(adminData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(() => {
      // Handle success here, maybe navigate to account management page
      navigate('/accountmanage');
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <Header />
      <Nav2 />
      <form className="admin-form" onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </label>
        <label>
          First Name:
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <button type="submit">Add New Admin</button>
      </form>
      <Footer />
    </div>
  );
}

export default AddAdmin;

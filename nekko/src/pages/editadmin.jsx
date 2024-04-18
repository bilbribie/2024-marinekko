// editadmin.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Nav2 from './components/nav2';
import Footer from './components/footer';
import { useParams, useNavigate } from 'react-router-dom';
import './style/editadmin.css';

function EditAdmin() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { adminId } = useParams(); // Assume this is how you get the admin's ID
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the current admin details to pre-populate the form
    fetch(`http://localhost:3001/api/adminaccount/${adminId}`)
      .then(response => response.json())
      .then(data => {
        setUsername(data.username);
        setFirstName(data.firstName);
        setLastName(data.lastName);
        setEmail(data.email);
        // Don't fetch password for security reasons
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [adminId]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminData = { username, firstName, lastName, email, password };
    // PUT request to API to update the admin
    fetch(`http://localhost:3001/api/adminaccount/${adminId}`, {
      method: 'PUT',
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
      <form className="edit-admin-form" onSubmit={handleSubmit}>
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
          />
        </label>
        <button type="submit">Save Changes</button>
      </form>
      <Footer />
    </div>
  );
}

export default EditAdmin;

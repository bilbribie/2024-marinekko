// editadmin.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Nav2 from './components/nav2';
import Footer from './components/footer';
import { useParams, useNavigate } from 'react-router-dom';
import './style/editadmin.css';
import ConfirmPopup from './components/confirmpopup';
import ReportPopup from './components/reportpopup';

function EditAdmin() {
  const [username, setUsername] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { id: adminId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (adminId) {
      fetch(`http://localhost:3001/api/adminaccount/${adminId}`)
        .then(response => {
          if (!response.ok) throw new Error('Failed to fetch admin data');
          return response.json();
        })
        .then(data => {
          console.log(data);
          // Set data if response is successful
          setUsername(data.AdminUsername);
          setFirstName(data.AdminFirstName);
          setLastName(data.AdminSurname);
          setEmail(data.AdminEmail);
          setPassword(data.AdminPassword);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    } else {
      console.error('Admin ID is undefined');
    }
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
      if (!response.ok) throw new Error('Failed to fetch admin data');
      return response.json();
    })
    .then(data => {
      console.log('Admin editted successfully');
      setUsername(data.AdminUsername);
      setFirstName(data.AdminFirstName);
      setLastName(data.AdminSurname);
      setEmail(data.AdminEmail);
      setPassword(data.AdminPassword);
    })
    .then(() => {
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
            type="text"
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

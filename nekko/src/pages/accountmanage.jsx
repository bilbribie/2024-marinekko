// AccountManage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/header';
import Nav2 from './components/nav2';
import Footer from './components/footer';
import './style/accountmanage.css';

function AccountManage() {
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/adminaccount')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setAdmins(data))
      .catch(error => console.error('Error:', error));
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredAdmins = admins.filter(admin =>
    admin.AdminUsername.toLowerCase().includes(searchTerm)
  );

  const handleDeleteAdmin = (adminId) => {
    if (window.confirm('Are you sure you want to delete this admin?')) {
      fetch(`http://localhost:3001/api/adminaccount/${adminId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json(); // Process the JSON response
      })
      .then(data => {
        console.log(data.message); // Log the success message
        setAdmins(admins.filter(admin => admin.AdminID !== adminId));
      })
      .catch(error => {
        console.error('Error:', error); // Log any errors
        alert('Failed to delete admin: ' + error); // Provide feedback to the user
      });
    }
  };

  const handleEditAdmin = (adminId) => {
    navigate(`/editadmin/${adminId}`);
  };

  return (
    <div>
      <Header />
      <Nav2 />
      <div className="admin-manage-container">
        <input
          type="text"
          placeholder="Search admins..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={() => navigate('/addadmin')}>Add New Admin</button>
        <div className="admin-list">
          {filteredAdmins.map((admin) => (
            <div key={admin.AdminID} className="admin-row">
              <div>{admin.AdminUsername}</div>
              <div>{admin.AdminFirstName}</div>
              <div>{admin.AdminSurname}</div>
              <div>{admin.AdminEmail}</div>
              <button onClick={() => handleEditAdmin(admin.AdminID)}>
                <img src='/assets/edit-text.png' alt="Edit" />
              </button>
              <button onClick={() => handleDeleteAdmin(admin.AdminID)}>
                <img src='/assets/cross.png' alt="Delete" />
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountManage;

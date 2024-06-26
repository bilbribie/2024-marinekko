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
        return response.json(); 
      })
      .then(data => {
        console.log(data.message); 
        setAdmins(admins.filter(admin => admin.AdminID !== adminId));
      })
      .catch(error => {
        console.error('Error:', error); 
        alert('Failed to delete admin: ' + error); 
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
        <table className="admin-table">
          <thead>
            <tr>
              <th>Username</th>
              <th>First Name</th>
              <th>Surname</th>
              <th>Email</th>
              <th>Actions</th>
              <th> </th>
            </tr>
          </thead>
          <tbody>
            {filteredAdmins.map((admin) => (
              <tr key={admin.AdminID}>
                <td>{admin.AdminUsername}</td>
                <td>{admin.AdminFirstName}</td>
                <td>{admin.AdminSurname}</td>
                <td>{admin.AdminEmail}</td>
                <td>
                  <button  onClick={() => handleEditAdmin(admin.AdminID)}>
                  <img src='/assets/edit-text.png' alt="Edit" style={{ width: '24px', height: 'auto' }} />
                  </button>
                </td>
                <td>
                <button onClick={() => handleDeleteAdmin(admin.AdminID)}>
                    <img src='/assets/cross.png' alt="Delete" style={{ width: '24px', height: 'auto' }} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Footer />
    </div>
  );
}

export default AccountManage;

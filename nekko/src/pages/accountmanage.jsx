// AccountManage.jsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './components/header';
import Nav2 from './components/nav2';
import Footer from './components/footer';
import AdminRow from './components/adminrow'
import PageNavBlock from './components/pagenavblock';
import './style/accountmanage.css';

function AccountManage() {
  const [admins, setAdmins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:3001/api/adminaccount')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        // Ensure every admin object has an 'id' property
        const adminsData = data.map((admin) => {
          if (!admin.hasOwnProperty('id') && admin.hasOwnProperty('someOtherIdProp')) {
            // Assuming 'someOtherIdProp' is the property in your response that corresponds to 'id'
            return { ...admin, id: admin.someOtherIdProp };
          }
          return admin;
        });
        setAdmins(adminsData);
      })
      .catch((error) => console.error('Error:', error));
  }, []);
  

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredAdmins = admins.filter((admin) => {
    const adminUsername = admin.username || "";
    return adminUsername.toLowerCase().includes(searchTerm);
  });

  const handleDeleteAdmin = (adminId) => {
    fetch(`http://localhost:3001/api/adminaccount/${adminId}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        setAdmins(admins.filter(admin => admin.id !== adminId));
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div>
      <Header />
      <Nav2 />
      <div className="admin-manage-container">
        {/* Add search functionality */}
        <input
          type="text"
          placeholder="Search admins..."
          value={searchTerm}
          onChange={handleSearch}
        />
        <button onClick={() => navigate('/addadmin')}>Add New Admin</button>
        {/* Render admin rows */}
        {filteredAdmins.map((admin) => {
          // Ensure admin.id is not undefined
          if (admin.id === undefined) {
            console.error('Admin object is missing an id:', admin);
            return null; 
          }
          return (
            <AdminRow key={admin.id.toString()} admin={admin} onDelete={handleDeleteAdmin} />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

export default AccountManage;
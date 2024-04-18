// AdminRow.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';


function AdminRow({ admin, onDelete }) {
  const navigate = useNavigate();

  const handleDelete = () => {
    // A confirmation dialog will appear when the delete button is clicked
    const isConfirmed = window.confirm(`Are you sure you want to delete ${admin.username}?`);
    if (isConfirmed) {
      // If confirmed, the onDelete function passed as a prop is called
      onDelete(admin.id);
    }
  };

  return (
    <div className="admin-row">
      <div>{admin.username}</div>
      <div>{admin.firstName}</div>
      <div>{admin.lastName}</div>
      <div>{admin.email}</div>
      <button onClick={() => navigate(`/editadmin/${admin.id}`)}>
        <img src='./assets/edit-text.png' alt="Edit" />
      </button>
      <button onClick={handleDelete}>
        <img src='./assets/cross.png' alt="Delete" />
      </button>
    </div>
  );
}

export default AdminRow;

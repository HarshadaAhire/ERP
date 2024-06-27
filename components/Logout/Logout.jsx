// src/components/Logout/Logout.jsx

import React from 'react';
import './Logout.css';

const Logout = ({ setIsLogoutPopupOpen }) => {
  const handleLogout = () => {
    // Perform your logout logic here
    console.log('Logged out');
    setIsLogoutPopupOpen(false);
    // Redirect to the login page or homepage after logout
    // For example:
    // window.location.href = '/login';
  };

  const handleClosePopup = () => {
    setIsLogoutPopupOpen(false);
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Are you sure you want to logout?</h2>
        <div className="popup-buttons">
          <button className="cancel-button" onClick={handleClosePopup}>Cancel</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Logout;

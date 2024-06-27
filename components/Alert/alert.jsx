// src/Alert.js

import React from 'react';
import './alert.css';

const Alert = ({ message, onClose }) => {
  return (
    <div className="alert-overlay">
      <div className="alert-box">
        <p>{message}</p>
        <button onClick={onClose} className="alert-button">Close</button>
      </div>
    </div>
  );
};

export default Alert;

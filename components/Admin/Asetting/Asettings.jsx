import React, { useState } from 'react';
import './Asetting.css'; // Import your CSS file

// Profile component
const Profile = ({ name }) => {
  return (
    <div className="emp-profile">
      {/* Placeholder for employee profile picture */}
      <div>{}</div>
    </div>
  );
};

const Asetting = () => {
  const [activeTab, setActiveTab] = useState('personalInfo');
  const [formData, setFormData] = useState({
    name: 'Marimba Gourg',
    designation: 'Software Engineer',
    dateOfJoining: '01/01/2020',
    address: '123 Street, City, Country',
    phone: '123-456-7890',
    email: 'marimba@example.com',
  });
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });
  const [passwordError, setPasswordError] = useState('');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handlePasswordChange = (e) => {
    setPasswords({
      ...passwords,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Save form data logic
    console.log('Form data saved:', formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Password validation logic
    if (passwords.newPassword !== passwords.confirmPassword) {
      setPasswordError("Passwords don't match");
    } else if (passwords.newPassword.length < 6) {
      setPasswordError('Password must be at least 6 characters long');
    } else {
      // Submit password change request
      console.log('Password change request:', passwords);
      // Clear password error and reset form
      setPasswordError('');
      setPasswords({
        currentPassword: '',
        newPassword: '',
        confirmPassword: '',
      });
    }
  };

  return (
    <div className="setting-page">
      <h1>Setting</h1>

      {/* Profile Section */}
      <Profile name={formData.name} />

      {/* Tabs */}
      <div className="tabs">
        <button
          className={activeTab === 'personalInfo' ? 'active' : ''}
          onClick={() => handleTabChange('personalInfo')}
        >
          Personal Info
        </button>
        <button
          className={activeTab === 'changePassword' ? 'active' : ''}
          onClick={() => handleTabChange('changePassword')}
        >
          Change Password
        </button>
        <button
          className={activeTab === 'notifications' ? 'active' : ''}
          onClick={() => handleTabChange('notifications')}
        >
          Notifications
        </button>
      </div>

      {/* Personal Info Section */}
      {activeTab === 'personalInfo' && (
        <div className="personal-info-section">
          <h2>Personal Info</h2>
          <div className="personal-info-container">
            <div className="non-editable-info">
              <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" value={formData.name} disabled />
              </div>
              <div className="form-group">
                <label htmlFor="designation">Designation:</label>
                <input type="text" id="designation" name="designation" value={formData.designation} disabled />
              </div>
              <div className="form-group">
                <label htmlFor="dateOfJoining">Date of Joining:</label>
                <input type="text" id="dateOfJoining" name="dateOfJoining" value={formData.dateOfJoining} disabled />
              </div>
            </div>
            <div className="editable-info">
              <div className="form-group">
                <label htmlFor="address">Address:</label>
                <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} />
              </div>
              <div className="form-group" style={{ marginBottom: '1rem' }}>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
              </div>
              <button className="btn" onClick={handleSave}>Save</button>
            </div>
          </div>
        </div>
      )}

      {/* Change Password Section */}
      {activeTab === 'changePassword' && (
        <div className="change-password-section">
          <h2>Change Password</h2>
          <form onSubmit={handleSubmit}>
            {/* Form fields for changing password */}
            <div className="form-group">
              <label htmlFor="currentPassword"></label>
              <input type="password" id="currentPassword" name="currentPassword" placeholder="Current Password:" value={passwords.currentPassword} onChange={handlePasswordChange} />
            </div>
            <div className="form-group">
              <label htmlFor="newPassword"></label>
              <input type="password" id="newPassword" name="newPassword"  placeholder="New Password:" value={passwords.newPassword} onChange={handlePasswordChange} />
            </div>
            <div className="form-group">
              <label htmlFor="confirmPassword"></label>
              <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm New Password:" value={passwords.confirmPassword} onChange={handlePasswordChange} />
            </div>
            <button className="btn" type="submit">Change Password</button>
            {passwordError && <p className="error-message">{passwordError}</p>}
          </form>
        </div>
      )}

      {/* Notifications Section */}
      {activeTab === 'notifications' && (
        <div className="notifications-section">
          <h2>Notifications</h2>
          <div className="notification-settings">
            <h5>Push Notification</h5>
            <div className="toggle-switch">
              <input type="checkbox" id="pushNotification" />
              <label htmlFor="pushNotification" className="toggle-switch-label"></label>
            </div>
            
            <div className="notification-type">
              <h5>Email Notification Types</h5>
              <div className="notification-option">
                <label htmlFor="reminderEmail">Reminder Email</label>
                <div className="toggle-switch">
                  <input type="checkbox" id="reminderEmail" />
                  <label htmlFor="reminderEmail" className="toggle-switch-label"></label>
                </div>
              </div>
              <div className="notification-option">
                <label htmlFor="pushEmail">Push Email</label>
                <div className="toggle-switch">
                  <input type="checkbox" id="pushEmail" />
                  <label htmlFor="pushEmail" className="toggle-switch-label"></label>
                </div>
              </div>
              <div className="notification-option">
                <label htmlFor="supportEmail">Support Email</label>
                <div className="toggle-switch">
                  <input type="checkbox" id="supportEmail" />
                  <label htmlFor="supportEmail" className="toggle-switch-label"></label>
                </div>
              </div>
            </div>
            <h5>Quiet Mode</h5>
            <div className="toggle-switch">
              <input type="checkbox" id="quietMode" />
              <label htmlFor="quietMode" className="toggle-switch-label"></label>
            </div>
            <div className="notification-option">
              <label htmlFor="pauseAll">Pause All Notifications</label>
              <div className="toggle-switch">
                <input type="checkbox" id="pauseAll" />
                <label htmlFor="pauseAll" className="toggle-switch-label"></label>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Asetting;

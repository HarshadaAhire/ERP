import React, { useState } from 'react';
import './setting.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faTwitter, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

const Setting = () => {
  const [activeTab, setActiveTab] = useState('personal-info');
  const [personalInfo, setPersonalInfo] = useState({
    name: 'Jonathan Doe',
    email: 'john@example.com',
    phone: '(239) 816-9029',
    mobile: '(+91) 970-453-970',
    address: 'Bay Area, San Francisco, CA',
    bloodGroup: 'O+',
  });

  const [passwordInfo, setPasswordInfo] = useState({
    oldPassword: '',
    newPassword: '',
    reenterPassword: '',
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({ ...personalInfo, [name]: value });
  };

  const handlePasswordChange = (e) => {
    const { name, value } = e.target;
    setPasswordInfo({ ...passwordInfo, [name]: value });
  };

  const handleSubmitPersonalInfo = (e) => {
    e.preventDefault();
    console.log('Saving personal info:', personalInfo);
  };

  const handleSubmitChangePassword = (e) => {
    e.preventDefault();
    console.log('Changing password:', passwordInfo);
  };

  return (
    <div className="main-container">
      <section className="profile-section">
        <div className="profile-header">
          <img
            src="/profilephotp.jpg" // Replace with your dummy photo path
            alt="Profile"
            className="profile-photo"
          />
          <h1>John Doe</h1>
          <p>
            Full Stack Developer
            <br />
            San Francisco, CA
          </p>
          <div className="profile-actions">
            <button className="follow-btn">Follow</button>
            <button className="message-btn">Message</button>
          </div>
          <div className="about-me">
            <p>About Me:</p>
            <p>
              I am a passionate Full Stack Developer with experience in creating dynamic web applications.
              I enjoy solving complex problems and working on innovative projects.
            </p>
          </div>
          <div className="social-links">
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="github">
              <FontAwesomeIcon icon={faGithub} size="2x" /> {/* Adjust size as needed */}
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" /> {/* Adjust size as needed */}
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" className="instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" /> {/* Adjust size as needed */}
            </a>
            <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" className="facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" /> {/* Adjust size as needed */}
            </a>
          </div>
        </div>
      </section>
      <section className="details-section">
        <div className="profile-heading">Profile</div>
        <div className="user-details">
          <div className="tab-buttons">
            <button
              className={`tab-button ${activeTab === 'personal-info' ? 'active' : ''}`}
              onClick={() => handleTabChange('personal-info')}
            >
              Personal Info
            </button>
            <button
              className={`tab-button ${activeTab === 'change-password' ? 'active' : ''}`}
              onClick={() => handleTabChange('change-password')}
            >
              Change Password
            </button>
            <button
              className={`tab-button ${activeTab === 'notification' ? 'active' : ''}`}
              onClick={() => handleTabChange('notification')}
            >
              Notifications
            </button>
          </div>
          {activeTab === 'personal-info' && (
            <form onSubmit={handleSubmitPersonalInfo}>
              <div className="user-info">
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={personalInfo.name}
                  onChange={handlePersonalInfoChange}
                />
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                />
                <label htmlFor="phone">Phone:</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  value={personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                />
                <label htmlFor="mobile">Mobile:</label>
                <input
                  type="text"
                  id="mobile"
                  name="mobile"
                  value={personalInfo.mobile}
                  onChange={handlePersonalInfoChange}
                />
                <label htmlFor="address">Address:</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={personalInfo.address}
                  onChange={handlePersonalInfoChange}
                />
                <button type="submit">Save</button>
              </div>
            </form>
          )}
          {activeTab === 'change-password' && (
            <form onSubmit={handleSubmitChangePassword}>
              <div className="user-info">
                <label htmlFor="old-password">Old Password:</label>
                <input
                  type="password"
                  id="old-password"
                  name="oldPassword"
                  value={passwordInfo.oldPassword}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="new-password">New Password:</label>
                <input
                  type="password"
                  id="new-password"
                  name="newPassword"
                  value={passwordInfo.newPassword}
                  onChange={handlePasswordChange}
                />
                <label htmlFor="reenter-password">Confirm Password:</label>
                <input
                  type="password"
                  id="reenter-password"
                  name="reenterPassword"
                  value={passwordInfo.reenterPassword}
                  onChange={handlePasswordChange}
                />
                <button type="submit">Change Password</button>
              </div>
            </form>
          )}
          {activeTab === 'notification' && (
            <div className="user-info">
              <div className="notification-item">Notification 1</div>
              <div className="notification-item">Notification 2</div>
              <div className="notification-item">Notification 3</div>
              <div className="notification-item">Notification 4</div>
              <div className="notification-item">Notification 5</div>
              <div className="notification-item">Notification 6</div>
            </div>
          )}
        </div>
        <div className="project-progress-container">
          <div className="project-progress">
            <div className="status-item">
              <span>Web Design</span>
              <div className="progress-bar web-design">
                <div className="progress" style={{ width: '20%', backgroundColor: '#007bff' }}></div>
              </div>
            </div>
            <div className="status-item">
              <span>Frontend Development</span>
              <div className="progress-bar website-markup">
                <div className="progress" style={{ width: '10%', backgroundColor: '#28a745' }}></div>
              </div>
            </div>
            <div className="status-item">
              <span>SEO Optimization</span>
              <div className="progress-bar one-page">
                <div className="progress" style={{ width: '50%', backgroundColor: '#ffc107' }}></div>
              </div>
            </div>
            <div className="status-item">
              <span>Client Feedback Integration</span>
              <div className="progress-bar mobile-template">
                <div className="progress" style={{ width: '80%', backgroundColor: '#dc3545' }}></div>
              </div>
            </div>
            <div className="status-item">
              <span>Backend API</span>
              <div className="progress-bar backend-api">
                <div className="progress" style={{ width: '30%', backgroundColor: '#17a2b8' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Setting;

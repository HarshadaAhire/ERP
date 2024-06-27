import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { useForm } from 'react-hook-form';
import './Login.css';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [selectedTab, setSelectedTab] = useState('user');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate hook

  const onSubmit = async (data) => {
    try {
      // Make API call to authenticate user
      const response = await fetch('http://localhost:8080/Attendance/Employee/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Invalid credentials');
      }

      const { token } = await response.json();

      // Store JWT token in local storage
      localStorage.setItem('token', token);

      // Redirect to dashboard or desired route
      navigate('/dashboard'); // Use navigate instead of history.push
    } catch (error) {
      setError(error.message);
    }
  };

  const showForgotPasswordLink = true; // You can adjust this based on your logic

  return (
    <div className="login-container">
      {error && <p className="error-message">{error}</p>}
      <div className="tabs">
        <button 
          className={`tab ${selectedTab === 'user' ? 'active' : ''}`} 
          onClick={() => setSelectedTab('user')}
        >
          User
        </button>
        <button 
          className={`tab ${selectedTab === 'admin' ? 'active' : ''}`} 
          onClick={() => setSelectedTab('admin')}
        >
          Admin
        </button>
      </div>

      {selectedTab === 'user' && (
        <>
          <h2>User Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="username">Username or Email:</label>
              <input
                type="text"
                id="username"
                {...register('username', { required: true })}
              />
              {errors.username && <p>This field is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                {...register('password', { required: true, minLength: 6 })}
              />
              {errors.password && <p>Password must be at least 6 characters</p>}
            </div>

            <button type="submit">Login</button>
            {showForgotPasswordLink && <Link to="/forgot" className="forgot-password">Forgot Password?</Link>}
          </form>

          <div className="register-link">
            <p>Don't have an account? <Link to="/register">Register</Link></p>
          </div>
        </>
      )}

      {selectedTab === 'admin' && (
        <>
          <h2>Admin Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label htmlFor="admin-username">Admin Username or Email:</label>
              <input
                type="text"
                id="admin-username"
                {...register('adminUsername', { required: true })}
              />
              {errors.adminUsername && <p>This field is required</p>}
            </div>

            <div className="form-group">
              <label htmlFor="admin-password">Admin Password:</label>
              <input
                type="password"
                id="admin-password"
                {...register('adminPassword', { required: true, minLength: 6 })}
              />
              {errors.adminPassword && <p>Password must be at least 6 characters</p>}
            </div>

            <button type="submit">Login</button>
            {showForgotPasswordLink && <Link to="/forgot" className="forgot-password">Forgot password ?</Link>}
          </form>

          <div className="register-link">
            <p>Don't have an admin account? <Link to="/register-admin">Register</Link></p>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;

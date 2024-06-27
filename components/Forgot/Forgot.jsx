import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import './Forgot.css'; // Import your CSS file for styling

const Forgot = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            {...register('email', { required: true })}
          />
          {errors.email && <p>This field is required</p>}
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

        <div className="form-group">
          <label htmlFor="confirm-password">Confirm Password:</label>
          <input
            type="password"
            id="confirm-password"
            {...register('confirmPassword', {
              required: true,
              validate: value => value === password || "Passwords do not match"
            })}
          />
          {errors.confirmPassword && <p>{errors.confirmPassword.message}</p>}
        </div>

        <button type="submit">Reset Password</button>
        <Link to="/" className="back-to-login">Back to Login</Link>
      </form>
    </div>
  );
};

export default Forgot;

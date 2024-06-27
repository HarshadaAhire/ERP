import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import './register.css'; // Import your CSS file for styling

const Register = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const password = watch('password', '');

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission here
  };

  return (
    <div className="register-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="full-name">Full Name:</label>
            <input
              type="text"
              id="full-name"
              {...register('fullName', { required: true })}
            />
            {errors.fullName && <p>This field is required</p>}
          </div>
          <div className="form-group">
            <label htmlFor="phone-number">Phone Number:</label>
            <input
              type="text"
              id="phone-number"
              {...register('phoneNumber', { required: true })}
            />
            {errors.phoneNumber && <p>This field is required</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="current-address">Current Address:</label>
            <input
              type="text"
              id="current-address"
              {...register('currentAddress', { required: true })}
            />
            {errors.currentAddress && <p>This field is required</p>}
          </div>
          <div className="form-group">
            <label htmlFor="permanent-address">Permanent Address:</label>
            <input
              type="text"
              id="permanent-address"
              {...register('permanentAddress', { required: true })}
            />
            {errors.permanentAddress && <p>This field is required</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="gender">Gender:</label>
            <select id="gender" {...register('gender', { required: true })}>
              <option value="">Select</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p>This field is required</p>}
          </div>
          <div className="form-group">
            <label htmlFor="marital-status">Marital Status:</label>
            <select id="marital-status" {...register('maritalStatus', { required: true })}>
              <option value="">Select</option>
              <option value="Single">Single</option>
              <option value="Married">Married</option>
            </select>
            {errors.maritalStatus && <p>This field is required</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="dob">Date of Birth:</label>
            <input
              type="date"
              id="dob"
              {...register('dob', { required: true })}
            />
            {errors.dob && <p>This field is required</p>}
          </div>
          <div className="form-group">
            <label htmlFor="doj">Date of Joining:</label>
            <input
              type="date"
              id="doj"
              {...register('doj', { required: true })}
            />
            {errors.doj && <p>This field is required</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="department">Department:</label>
            <select id="department" {...register('department', { required: true })}>
              <option value="">Select</option>
              <option value="HR">HR</option>
              <option value="Finance">Finance</option>
              <option value="IT (Java Developer)">IT (Java Developer)</option>
              <option value="IT (Frontend Developer)">IT (Frontend Developer)</option>
              <option value="IT (Backend Developer)">IT (Backend Developer)</option>
              {/* Add more options as needed */}
            </select>
            {errors.department && <p>This field is required</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              {...register('email', { required: true })}
            />
            {errors.email && <p>This field is required</p>}
          </div>
        </div>

        <div className="form-row">
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
        </div>

        <button type="submit" className="save-button">Save</button>
        <div className="back-to-login-container">
          <Link to="/" className="back-to-login">Back to Login</Link>
        </div>

        <p>By clicking "Save", you agree to our <span className="terms">Terms and Conditions</span>.</p>
      </form>
    </div>
  );
};

export default Register;

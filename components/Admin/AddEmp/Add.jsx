import React from 'react';
import './Add.css'; // Import your CSS file for styling

const Add = () => {
  return (
    <div className="add-employee-container">
      <div className="form-wrapper">
        
        <div className="form-container">
          {/* Employee Form */}
          <h2>Add Employee</h2>
          <form>
            <div className="form-section">
              <h5>Personal Details</h5>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="full-name">Full Name:</label>
                  <input type="text" id="full-name" name="full-name" />
                </div>
                <div className="form-group">
                  <label htmlFor="surname">Last Name:</label>
                  <input type="text" id="surname" name="surname" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mobile-no">Mobile No:</label>
                  <input type="tel" id="mobile-no" name="mobile-no" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email Address:</label>
                  <input type="email" id="email" name="email" />
                </div>
              </div>
            </div>
            <div className="form-section">
              <h5>Qualification</h5>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="qualification">Qualification:</label>
                  <input type="text" id="qualification" name="qualification" />
                </div>
                <div className="form-group">
                  <label htmlFor="passing-year">Passing Year:</label>
                  <select id="passing-year" name="passing-year">
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    {/* Add more options as needed */}
                  </select>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="admin-info-container">
        <h5>Admin Info</h5>
        <form>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="doj">Date of Joining:</label>
              <input type="date" id="doj" name="doj" />
            </div>
            <div className="form-group">
              <label htmlFor="designation">Designation:</label>
              <select id="designation" name="designation">
                <option value="Manager">Manager</option>
                <option value="Supervisor">Supervisor</option>
                <option value="Team Lead">Team Lead</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="department">Department:</label>
              <select id="department" name="department">
                <option value="HR">HR</option>
                <option value="Finance">Finance</option>
                <option value="IT">IT</option>
                {/* Add more options as needed */}
              </select>
            </div>
          </div>
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  );
};

export default Add;

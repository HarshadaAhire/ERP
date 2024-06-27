import React from 'react';
import './leaves.css'; // Import your CSS file

const Form = () => {
  return (
    <div className="leave-form-container">
      <h2>Apply for Leave</h2>
      <div className="form-container">
        <form className="leave-form">
          
          <div className="form-group">
            <label htmlFor="leave-type">leave type</label>
            <select id="leave-type" name="leave-type" placeholder="Leave-Type">
              <option value="sick">Sick Leave</option>
              <option value="unpaid">Unpaid Leave</option>
              <option value="paid">Paid Leave</option>
              <option value="causal">Causal Leave</option>

              <option value="maternity">Maternity Leave</option>
              {/* Add other leave types */}
            </select>
          </div>
        
          <div className="form-group">
            <label htmlFor="start-date">start-date</label>
            <input type="date" id="start-date" name="start-date" />
          </div>
          <div className="form-group">
            <label htmlFor="end-date">end date</label>
            <input type="date" id="end-date" name="end-date" />
          </div>
          <div className="form-group">
            <label htmlFor="reason">comment</label>
            <textarea id="reason" name="reason" rows="4" placeholder=''></textarea>
          </div>
          <button className="apply-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;

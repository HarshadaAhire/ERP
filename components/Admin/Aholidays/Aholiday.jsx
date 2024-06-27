import React from 'react';
import './Aholiday.css'; // Import CSS file for styling

const holidays = [
  { name: 'New Year\'s Day', date: 'January 1', year: '2024' },
  { name: 'Valentine\'s Day', date: 'February 14', year: '2024' },
  { name: 'St. Patrick\'s Day', date: 'March 17', year: '2024' },
  { name: 'Easter Sunday', date: 'April 4', year: '2024' },
  { name: 'Mother\'s Day', date: 'May 9', year: '2024' },
  { name: 'Memorial Day', date: 'May 31', year: '2024' },
  { name: 'Father\'s Day', date: 'June 20', year: '2024' },
  { name: 'Independence Day', date: 'July 4', year: '2024' },
  { name: 'Labor Day', date: 'September 6', year: '2024' },
  { name: 'Halloween', date: 'October 31', year: '2024' },
  { name: 'Thanksgiving', date: 'November 25', year: '2024' },
  { name: 'Christmas Day', date: 'December 25', year: '2024' }
];

const Aholiday = () => {
  return (
    <div className="holiday-screen">
      <h1>Holidays List</h1>
      <div className="holiday-container">
        {holidays.map((holiday, index) => (
          <div className="holiday-card" key={index}>
            <div className="card-content">
              <h2>{holiday.name}</h2>
              <div className="date-container">
                <p>{holiday.date}</p>
                <p>{holiday.year}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aholiday;

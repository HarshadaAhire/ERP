import React from 'react';
import './Aholiday.css'; // Import CSS file for styling

const holidays = [
  { name: 'Republic Day', date: 'Jan 26', year: '2024' },
  { name: 'Holi', date: 'Mar 8', year: '2024' },
  { name: 'Gudi Padwa', date: 'apr 19', year: '2024' },
  // { name: 'Easter Sunday', date: 'Apr ', year: '2024' },
  { name: 'Ambedkar Jayanti', date: 'Apr 14', year: '2024' },
  { name: 'Mahatrashtra Day', date: 'May 01', year: '2024' },
  { name: 'Raksha Bandhan', date: 'Aug 15', year: '2024' },
  { name: 'Independence Day', date: 'Aug 19', year: '2024' },
  { name: 'Anant Chaturthi', date: 'Sept 17', year: '2024' },
  { name: 'Dussehra', date: 'Oct 12', year: '2024' },
  { name: 'Diwali', date: 'Oct 31', year: '2024' },
  { name: 'Christmas Day', date: 'Dec 25', year: '2024' }
];

const colors = ['#f16c69', '#f16c69', '#f16c69', '#f16c69', '#f16c69', '#f16c69', '#f16c69', '#f16c69', '#f16c69', '#f16c69', '#f16c69', '#f16c69'];

const Aholiday = () => {
  return (
    <div className="holiday-screen">
      <h1>Holidays List</h1>
      <div className="holiday-container">
        {holidays.map((holiday, index) => (
          <div className="holiday-card" key={index} style={{ backgroundColor: colors[index] }}>
            <h2>{holiday.name}</h2>
            <div className="date-container">
              <p>{holiday.date}</p>
              <p>{holiday.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Aholiday;

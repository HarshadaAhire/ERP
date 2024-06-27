import React, { useState, useEffect } from 'react';
import './Aattendance.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Aattendance = () => {
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handlePunchIn = () => {
    const currentTime = new Date();
    setPunchInTime(currentTime);
  };

  const handlePunchOut = () => {
    const currentTime = new Date();
    setPunchOutTime(currentTime);
  };

  const formatTime = (time) => {
    if (!time) return 'Not available';
    return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  const calculateTimestamp = (startTime, endTime) => {
    if (startTime && endTime) {
      const diff = endTime.getTime() - startTime.getTime();
      const seconds = Math.floor(diff / 1000);
      const minutes = Math.floor(seconds / 60);
      const hours = Math.floor(minutes / 60);
      const days = Math.floor(hours / 24);

      const remainingHours = hours % 24;
      const remainingMinutes = minutes % 60;
      const remainingSeconds = seconds % 60;

      return `${days} days ${remainingHours} hours ${remainingMinutes} minutes ${remainingSeconds} seconds`;
    } else {
      return 'Timestamp not available';
    }
  };

  return (
    <div className="attendance-container">
      <h1 className="attendance-heading">Attendance</h1>
      <i className="fas fa-clock clock-icon"></i>
      <div className="current-time">{currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}</div>
      <div className="buttons">
        <button onClick={handlePunchIn}>Check In</button>
        <button onClick={handlePunchOut}>Check Out</button>
      </div>
      <div className="timestamps">
        <p>Check In: {formatTime(punchInTime)}</p>
        <p>Check Out: {formatTime(punchOutTime)}</p>
        <p>Total Time Worked: {calculateTimestamp(punchInTime, punchOutTime)}</p>
      </div>
    </div>
  );
};

export default Aattendance;

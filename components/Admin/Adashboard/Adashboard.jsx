import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsEnvelopeFill } from 'react-icons/bs';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';
import './Adashboard.css';

function Adashboard() {
  const openHolidayWindow = () => {
    window.open('/holiday', '_blank');
  };

  const openMyTeamWindow = () => {
    window.open('/team', '_blank');
  };
  const openAlertWindow = () => {
    window.open('/alert', '_blank');
  };

  const openEventWindow = () => {
    window.open('/event', '_blank');
  };

  const attendanceData = [
    { name: 'Monday', present: 50, absent: 5 },
    { name: 'Tuesday', present: 48, absent: 7 },
    { name: 'Wednesday', present: 45, absent: 10 },
    { name: 'Thursday', present: 52, absent: 3 },
    { name: 'Friday', present: 49, absent: 6 },
    { name: 'Saturday', present: 30, absent: 20 },
    { name: 'Sunday', present: 0, absent: 50 },
  ];

  const leavesData = [
    { name: 'January', leaves: 2 },
    { name: 'February', leaves: 1 },
    { name: 'March', leaves: 3 },
    { name: 'April', leaves: 0 },
    { name: 'May', leaves: 4 },
    { name: 'June', leaves: 2 },
    { name: 'July', leaves: 1 },
    { name: 'August', leaves: 3 },
    { name: 'September', leaves: 2 },
    { name: 'October', leaves: 5 },
    { name: 'November', leaves: 4 },
    { name: 'December', leaves: 2 },
  ];

  const employeeStatusData = [
    { name: 'On Time', value: 70 },
    { name: 'Late', value: 20 },
    { name: 'Absent', value: 10 },
  ];

  const employeeStatus = {
    total: 65,
    inTime: 60,
    late: 15,
    absent: 8,
    vacation: 1,
  };

  const departments = [
    { name: 'Human Resources', count: 2 },
    { name: 'Entrepreneurship', count: 8 },
    { name: 'Operations', count: 7 },
    { name: 'Engineering', count: 10 },
  ];

  const birthdays = [
    { name: 'John Doe', email: 'john.doe@example.com' },
    { name: 'Jane Smith', email: 'jane.smith@example.com' },
  ];

  const COLORS = ['#0088FE', '#FFBB28', '#FF8042'];

  const totalStatus = employeeStatusData.reduce((acc, entry) => acc + entry.value, 0);
  const getRatio = (value) => ((value / totalStatus) * 100).toFixed(2);

  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
        <div className='card' onClick={openHolidayWindow} style={{ cursor: 'pointer' }}>
          <div className='card-inner'>
            <h3>HOLIDAYS</h3>
            <BsFillArchiveFill className='card_icon' />
          </div>
          <h1>12</h1>
        </div>

        <div className='card' onClick={openEventWindow} style={{ cursor: 'pointer' }}>
          <div className='card-inner'>
            <h3>EVENTS</h3>
            <BsFillGrid3X3GapFill className='card_icon' />
          </div>
          <h1>03</h1>
        </div>
        <div className='card' onClick={openMyTeamWindow} style={{ cursor: 'pointer' }}>
          <div className='card-inner'>
            <h3>Add-emp</h3>
            <BsPeopleFill className='card_icon' />
          </div>
          <h1>10</h1>
        </div>
        <div className='card' onClick={openAlertWindow} style={{ cursor: 'pointer' }}>
          <div className='card-inner'>
            <h3>ALERT</h3>
            <BsFillBellFill className='card_icon' />
          </div>
          <h1>01</h1>
        </div>
      </div>

      <div className='container-wrapper'>
        <div className='container'>
          <div className='container-title'>
            <h1>{employeeStatus.total}</h1>
            <p>Employees</p>
          </div>
          <div className='status-bar'>
            <div className='status-item'>
              <div className='status-label'>
                <p>In-time</p>
                <p>{employeeStatus.inTime}</p>
              </div>
              <div className='status-line'>
                <div className='status-fill' style={{ width: `${(employeeStatus.inTime / employeeStatus.total) * 100}%`, backgroundColor: '#0088FE' }}></div>
              </div>
            </div>
            <div className='status-item'>
              <div className='status-label'>
                <p>Late</p>
                <p>{employeeStatus.late}</p>
              </div>
              <div className='status-line'>
                <div className='status-fill' style={{ width: `${(employeeStatus.late / employeeStatus.total) * 100}%`, backgroundColor: '#FFBB28' }}></div>
              </div>
            </div>
            <div className='status-item'>
              <div className='status-label'>
                <p>Absent</p>
                <p>{employeeStatus.absent}</p>
              </div>
              <div className='status-line'>
                <div className='status-fill' style={{ width: `${(employeeStatus.absent / employeeStatus.total) * 100}%`, backgroundColor: '#FF8042' }}></div>
              </div>
            </div>
            <div className='status-item'>
              <div className='status-label'>
                <p>Out on Vacation</p>
                <p>{employeeStatus.vacation}</p>
              </div>
              <div className='status-line'>
                <div className='status-fill' style={{ width: `${(employeeStatus.vacation / employeeStatus.total) * 100}%`, backgroundColor: '#A4A4A4' }}></div>
              </div>
            </div>
          </div>
          <div className='view-button'>VIEW EMPLOYEES</div>
        </div>

        <div className='container'>
          <div className='container-title'>
            <h1>{departments.length}</h1>
            <p>Departments</p>
          </div>
          <div className='status-bar'>
            {departments.map((dept, index) => (
              <div key={index} className='status-item'>
                <div className='status-label'>
                  <p>{dept.name}</p>
                  <p>{dept.count}</p>
                </div>
                <div className='status-line'>
                  <div className='status-fill' style={{ width: `${(dept.count / employeeStatus.total) * 100}%`, backgroundColor: '#0088FE' }}></div>
                </div>
              </div>
            ))}
          </div>
          <div className='view-button'>VIEW DEPARTMENTS</div>
        </div>


        <div className='birthday-container'>
  <div className='birthday-title'>
    <h1>Birthdays</h1>
    <p>Today</p>
  </div>
  <div className='birthday-message highlighted-message'>
    <p>🎁 Take a moment and congratulate them on their special day!</p>
  </div>
  {birthdays.map((birthday, index) => (
    <div key={index} className='birthday-profile'>
      <div className='profile-img-container'>
        <img src={birthday.imgUrl} alt={birthday.name} className='profile-img' />
        <input 
          type="file" 
          className="upload-img" 
          onChange={(e) => handleImageUpload(e, index)} 
        />
      </div>
      <div className='birthday-info'>
        <p>{birthday.name}</p>
        <p>{birthday.email} <BsEnvelopeFill className='email-icon' /></p>
      </div>
    </div>
  ))}

</div>
</div>

      <div className='charts'>
        <div className='chart'>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="present" fill="#F87E73" />
              <Bar dataKey="absent" fill="#FAADA6" />
            </BarChart>
          </ResponsiveContainer>
          <div className='chart-title'>
            <h3>Attendance</h3>
          </div>
        </div>

        <div className='chart'>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={leavesData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="leaves" stroke="#F87E73" />
            </LineChart>
          </ResponsiveContainer>
          <div className='chart-title'>
            <h3>Leaves</h3>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Adashboard;

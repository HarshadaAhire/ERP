import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend as ChartLegend } from 'chart.js';
import './Dashboard.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Register chart elements
ChartJS.register(ArcElement, ChartTooltip, ChartLegend);

function Dashboard() {
  const [sDate, setsDate] = useState(new Date());
  const [events, setEvents] = useState({});
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [totalHours, setTotalHours] = useState('Not available');
  const [attendanceMissing, setAttendanceMissing] = useState(false);
  const [attendanceData, setAttendanceData] = useState({
    onTime: 0,
    late: 0,
    absent: 0,
  });
  const [weeklyAttendanceData, setWeeklyAttendanceData] = useState({
    onTime: 0,
    late: 0,
    absent: 0,
  });

  const holidays = [
    { date: new Date('2024-01-26'), name: 'Republic Day' },
    { date: new Date('2024-03-08'), name: 'Holi' },
    { date: new Date('2024-04-09'), name: 'Gudi Padwa' },
    { date: new Date('2024-04-14'), name: 'Ambedkar Jayanti' },
    { date: new Date('2024-05-01'), name: 'Maharashtra Day' },
    { date: new Date('2024-08-15'), name: 'Independence Day' },
    { date: new Date('2024-08-19'), name: 'Raksha Bandhan' },
    { date: new Date('2024-09-17'), name: 'Anant Chaturthi' },
    { date: new Date('2024-10-12'), name: 'Dussehra' },
    { date: new Date('2024-10-31'), name: 'Diwali' },
    { date: new Date('2024-11-05'), name: 'Diwali' },
    { date: new Date('2024-12-25'), name: 'Christmas Day' },
  ];

  const leaves = [
    { date: new Date('2024-02-10'), type: 'Sick Leave' },
    { date: new Date('2024-03-05'), type: 'Personal Leave' },
    { date: new Date('2024-04-20'), type: 'Vacation' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    calculateWeeklyAttendance();
  }, [events]);

  const handlePunchIn = () => {
    const currentTime = new Date();
    setPunchInTime(currentTime);
    setAttendanceMissing(false);
    updateAttendanceData(currentTime, 'in');
  };

  const handlePunchOut = () => {
    if (!punchInTime) {
      setAttendanceMissing(true);
      return;
    }
    const currentTime = new Date();
    setPunchOutTime(currentTime);

    const diff = (currentTime.getTime() - punchInTime.getTime()) / 1000; // difference in seconds
    const hours = Math.floor(diff / 3600);
    const minutes = Math.floor((diff % 3600) / 60);
    const seconds = Math.floor(diff % 60);

    setTotalHours(`${hours} hours ${minutes} minutes ${seconds} seconds`);
  };

  const formatTime = (time) => {
    if (!time) return 'Not available';
    return time.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  };

  const findMonthDays = (y, m) => new Date(y, m + 1, 0).getDate();
  const findFirstDay = (y, m) => new Date(y, m, 1).getDay();
  const changeToPrevMonth = () => setsDate((pDate) => new Date(pDate.getFullYear(), pDate.getMonth() - 1));
  const changeToNextMonth = () => setsDate((pDate) => new Date(pDate.getFullYear(), pDate.getMonth() + 1));

  const getHoliday = (date) =>
    holidays.find(
      (holiday) =>
        holiday.date.getDate() === date.getDate() &&
        holiday.date.getMonth() === date.getMonth() &&
        holiday.date.getFullYear() === date.getFullYear()
    );

  const getLeave = (date) =>
    leaves.find(
      (leave) =>
        leave.date.getDate() === date.getDate() &&
        leave.date.getMonth() === date.getMonth() &&
        leave.date.getFullYear() === date.getFullYear()
    );

  const handleDateClick = (date) => {
    const eventName = prompt('Enter event name:');
    const eventTime = prompt('Enter event time:');
    if (eventName && eventTime) {
      setEvents({
        ...events,
        [date.toDateString()]: { name: eventName, time: eventTime },
      });
    }
  };

  const showCalendar = () => {
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const fDay = findFirstDay(y, m);

    const allDays = [];

    for (let p = 0; p < fDay; p++) {
      allDays.push(<div key={`em-${p}`} className="box empty"></div>);
    }

    for (let d = 1; d <= mDays; d++) {
      const date = new Date(y, m, d);
      const holiday = getHoliday(date);
      const leave = getLeave(date);
      const event = events[date.toDateString()];
      const className = holiday ? 'holiday' : leave ? 'leave' : event ? 'event' : '';

      const title = holiday
        ? holiday.name
        : leave
        ? leave.type
        : event
        ? `${event.name} at ${event.time}`
        : '';

      allDays.push(
        <div
          key={`d-${d}`}
          className={`box ${className}`}
          onClick={() => handleDateClick(date)}
          data-tooltip-id={`tooltip-${d}`}
          data-tooltip-content={title}
        >
          {d}
          <ReactTooltip id={`tooltip-${d}`} />
        </div>
      );
    }

    return allDays;
  };

  const updateAttendanceData = (time, type) => {
    const hour = time.getHours();
    let status;
    if (type === 'in') {
      if (hour < 9) {
        status = 'onTime';
      } else if (hour >= 9 && hour <= 10) {
        status = 'late';
      } else {
        status = 'absent';
      }
      setAttendanceData((prevState) => ({
        ...prevState,
        [status]: prevState[status] + 1,
      }));
    }
  };

  const calculateWeeklyAttendance = () => {
    const today = new Date();
    const startOfWeek = new Date(today.setDate(today.getDate() - today.getDay()));
    const endOfWeek = new Date(today.setDate(today.getDate() + 6));
    const weeklyData = {
      onTime: 0,
      late: 0,
      absent: 0,
    };

    Object.keys(events).forEach((key) => {
      const eventDate = new Date(key);
      if (eventDate >= startOfWeek && eventDate <= endOfWeek) {
        const event = events[key];
        const hour = new Date(event.time).getHours();
        let status;
        if (hour < 9) {
          status = 'onTime';
        } else if (hour >= 9 && hour <= 10) {
          status = 'late';
        } else {
          status = 'absent';
        }
        weeklyData[status]++;
      }
    });

    setWeeklyAttendanceData(weeklyData);
  };

  const pieData = {
    labels: ['On Time', 'Late', 'Absent'],
    datasets: [
      {
        data: [
          weeklyAttendanceData.onTime,
          weeklyAttendanceData.late,
          weeklyAttendanceData.absent,
        ],
        backgroundColor: ['#28a745', '#ffc107', '#dc3545'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  // New containers for announcements, schedule, and upcoming events
  const AnnouncementContainer = () => {
    const announcements = [
      { date: '26 June', text: 'Fun Friday' },
      { date: '22 June', text: 'Wear your ID Cards' },
    ];

    return (
      <div className="announcement-container">
        <h3>Announcements</h3>
        {announcements.map((announcement, index) => (
          <div key={index} className="announcement">
            <div className="announcement-date">{announcement.date}</div>
            <div className="announcement-text">{announcement.text}</div>
          </div>
        ))}
      </div>
    );
  };

  const ScheduleContainer = () => {
    return (
      <div className="additional-container">
        <h3>Schedule for Today</h3>
        <div>No schedule for today</div>
      </div>
    );
  };

  const UpcomingEventsContainer = () => {
    const upcomingEvents = [
      {
        date: 'FEB 19',
        time: '10:00 AM',
        description: 'Developers Meeting',
        teamPhoto: '', // Replace this with the actual URL of the Freepik image
      },
    ];

    return (
      <div className="upcoming-events-container">
        <h3>Upcoming Events</h3>
        {upcomingEvents.map((event, index) => (
          <div key={index} className="upcoming-event">
            <div className="event-date">{event.date}</div>
            <div className="event-details">
              <div className="event-time">{event.time}</div>
              <div className="event-description">{event.description}</div>
              <div className="team-photo">
                <img src={event.teamPhoto} alt="Team" />
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const BirthdayContainer = () => {
    const today = new Date().toISOString().split('T')[0];
    const birthdays = [
      { name: 'John Doe', date: '2024-06-23' },
      { name: 'Jane Smith', date: '2024-06-25' },
    ].filter(birthday => birthday.date === today);

    return (
      <div className="additional-container small-height">
        <h3>Birthdays</h3>
        {birthdays.length > 0 ? (
          birthdays.map((birthday, index) => (
            <div key={index} className="birthday">
              <strong>{birthday.date}</strong> - {birthday.name}'s birthday!
              <div className="employee-photo">
                <img src="dummy_employee_photo.jpg" alt={birthday.name} />
              </div>
            </div>
          ))
        ) : (
          <div>No birthdays today</div>
        )}
      </div>
    );
  };

  const HolidayContainer = () => {
    const upcomingHoliday = holidays.find(holiday => holiday.date > new Date());

    return (
      <div className="additional-container small-height">
        <h3>Upcoming Holiday</h3>
        {upcomingHoliday ? (
          <div>
            <strong>{upcomingHoliday.date.toLocaleDateString()}</strong> - {upcomingHoliday.name}
          </div>
        ) : (
          <div>No upcoming holidays</div>
        )}
      </div>
    );
  };

  const WallOfFameContainer = () => {
    const employeesOfTheMonth = [
      { name: 'Alice Johnson', department: 'Development', photo: 'dummy_employee_photo1.jpg' },
      { name: 'Bob Brown', department: 'Marketing', photo: 'dummy_employee_photo2.jpg' },
    ];

    return (
      <div className="additional-container small-height">
        <h3>Employee of the Month</h3>
        {employeesOfTheMonth.map((employee, index) => (
          <div key={index} className="employee">
            <div className="employee-photo">
              <img src={employee.photo} alt={employee.name} />
            </div>
            <div className="employee-info">
              <strong>{employee.name}</strong> - {employee.department}
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="dashboard-container">
      <h2 className="h2">Dashboard</h2>
      
      <div className="containers-wrapper1">
        <AnnouncementContainer />
        <ScheduleContainer />
        <UpcomingEventsContainer />
      </div>

      <div className="attendance-wrapper">
        <div className="attendance-container left">
          <div className="attendance-heading">Attendance</div>
          <i className="fas fa-clock clock-icon"></i>
          <div className="current-time">
            {currentTime.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })}
          </div>
          <div className="buttons">
            <button onClick={handlePunchIn} disabled={punchInTime !== null}>
              Punch In
            </button>
            <button onClick={handlePunchOut} disabled={punchOutTime !== null || punchInTime === null}>
              Punch Out
            </button>
          </div>
          {attendanceMissing && <div className="attendance-missing">Attendance missing! Please punch in.</div>}
        </div>
        <div className="attendance-container right">
          <div className="attendance-heading">Attendance Details</div>
          <p>Punch In Time: {formatTime(punchInTime)}</p>
          <p>Punch Out Time: {formatTime(punchOutTime)}</p>
          <p>Total Hours: {totalHours}</p>
        </div>
        <div className="attendance-container right">
          <div className="attendance-heading">Weekly Attendance Summary</div>
          <div className="chart-container">
            <Pie data={pieData} options={pieOptions} />
          </div>
          <div className="legend">
            <div className="legend-item">
              <span className="box" style={{ backgroundColor: '#28a745' }}></span> On Time
            </div>
            <div className="legend-item">
              <span className="box" style={{ backgroundColor: '#ffc107' }}></span> Late
            </div>
            <div className="legend-item">
              <span className="box" style={{ backgroundColor: '#dc3545' }}></span> Absent
            </div>
          </div>
        </div>
      </div>

      <div className="containers-wrapper">
        <BirthdayContainer />
        <HolidayContainer />
        <WallOfFameContainer />
      </div>
    </div>
  );
}

export default Dashboard;

import React, { useState } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import './Holidays.css';

function Holiday() {
  const [sDate, setsDate] = useState(new Date());
  const [view, setView] = useState('month');
  const [events, setEvents] = useState({});
  const [showHolidays, setShowHolidays] = useState(false);

  const holidays = [
    { date: new Date("2024-01-26"), name: "Republic Day" },
    { date: new Date("2024-03-03"), name: "Holi" },
    { date: new Date("2024-04-09"), name: "Gudi Padwa" },
    { date: new Date("2024-04-14"), name: "Ambedkar Jayanti" },
    { date: new Date("2024-05-01"), name: "Maharashtra Day" },
    { date: new Date("2024-08-15"), name: "Independence Day" },
    { date: new Date("2024-08-19"), name: "Raksha Bandhan" },
    { date: new Date("2024-09-17"), name: "Anant Chaturthi" },
    { date: new Date("2024-10-10"), name: "Dussehra" },
    { date: new Date("2024-11-10"), name: "Diwali" },
    { date: new Date("2024-12-25"), name: "Christmas Day" },
  ];

  const leaves = [
    { date: new Date("2024-02-10"), type: "Sick Leave" },
    { date: new Date("2024-03-05"), type: "Personal Leave" },
    { date: new Date("2024-04-20"), type: "Vacation" },
  ];

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const findMonthDays = (y, m) => new Date(y, m + 1, 0).getDate();
  const findFirstDay = (y, m) => new Date(y, m, 1).getDay();

  const changeToPrevMonth = () => setsDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() - 1));
  const changeToNextMonth = () => setsDate(prevDate => new Date(prevDate.getFullYear(), prevDate.getMonth() + 1));

  const getHoliday = date =>
    holidays.find(holiday => holiday.date.getDate() === date.getDate() && holiday.date.getMonth() === date.getMonth() && holiday.date.getFullYear() === date.getFullYear());

  const getLeave = date =>
    leaves.find(leave => leave.date.getDate() === date.getDate() && leave.date.getMonth() === date.getMonth() && leave.date.getFullYear() === date.getFullYear());

  const handleDateClick = date => {
    const eventName = prompt("Enter event name:");
    const eventTime = prompt("Enter event time:");
    if (eventName && eventTime) {
      setEvents({
        ...events,
        [date.toDateString()]: {
          name: eventName,
          time: eventTime
        }
      });
    }
  };

  const showCalendar = () => {
    const y = sDate.getFullYear();
    const m = sDate.getMonth();
    const mDays = findMonthDays(y, m);
    const fDay = findFirstDay(y, m);
    const allDays = [];

    if (view === 'today') {
      const date = sDate;
      const holiday = getHoliday(date);
      const leave = getLeave(date);
      const event = events[date.toDateString()];
      const className = holiday ? "holiday" : leave ? "leave" : event ? "event" : "";
      const title = holiday ? holiday.name : leave ? leave.type : event ? `${event.name} at ${event.time}` : "";

      allDays.push(
        <div
          key={`d-${date.getDate()}`}
          className={`box ${className}`}
          onClick={() => handleDateClick(date)}
          data-tooltip-id={`tooltip-${date.getDate()}`}
          data-tooltip-content={title}
        >
          {date.getDate()}
          <ReactTooltip id={`tooltip-${date.getDate()}`} />
        </div>
      );
    } else if (view === 'week') {
      const startOfWeek = new Date(sDate);
      startOfWeek.setDate(sDate.getDate() - sDate.getDay());
      for (let i = 0; i < 7; i++) {
        const date = new Date(startOfWeek);
        date.setDate(startOfWeek.getDate() + i);
        const holiday = getHoliday(date);
        const leave = getLeave(date);
        const event = events[date.toDateString()];
        const className = holiday ? "holiday" : leave ? "leave" : event ? "event" : "";
        const title = holiday ? holiday.name : leave ? leave.type : event ? `${event.name} at ${event.time}` : "";

        allDays.push(
          <div
            key={`d-${date.getDate()}`}
            className={`box ${className}`}
            onClick={() => handleDateClick(date)}
            data-tooltip-id={`tooltip-${date.getDate()}`}
            data-tooltip-content={title}
          >
            {date.getDate()}
            <ReactTooltip id={`tooltip-${date.getDate()}`} />
          </div>
        );
      }
    } else {
      for (let p = 0; p < fDay; p++) {
        allDays.push(<div key={`em-${p}`} className="box empty"></div>);
      }

      for (let d = 1; d <= mDays; d++) {
        const date = new Date(y, m, d);
        const holiday = getHoliday(date);
        const leave = getLeave(date);
        const event = events[date.toDateString()];
        const className = holiday ? "holiday" : leave ? "leave" : event ? "event" : "";
        const title = holiday ? holiday.name : leave ? leave.type : event ? `${event.name} at ${event.time}` : "";

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
    }

    return allDays;
  };

  const handleTodayButtonClick = () => {
    setsDate(new Date());
    setView('today');
  };

  const handleWeekButtonClick = () => {
    setsDate(new Date());
    setView('week');
  };

  const handleMonthButtonClick = () => {
    setsDate(new Date());
    setView('month');
  };

  const toggleHolidayList = () => {
    setShowHolidays(!showHolidays);
  };

  return (
    <div className="dashboard">
      <h2 className="h2">Calendar</h2>
      <div className="main">
        <div className="header calendar-header">
          <button onClick={changeToPrevMonth}>&lt;</button>
          <h2>{sDate.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
          <button onClick={changeToNextMonth}>&gt;</button>
          <div className="button-container">
            <button onClick={toggleHolidayList}>List</button>
            <button onClick={handleTodayButtonClick}>Today</button>
            <button onClick={handleWeekButtonClick}>Week</button>
            <button onClick={handleMonthButtonClick}>Month</button>
          </div>
        </div>
        <div className="days-of-week">
          {daysOfWeek.map(day => (
            <div key={day} className="day-header">
              {day}
            </div>
          ))}
        </div>
        <div className="calendar-body">
          <div className="body">{showCalendar()}</div>
          <div className="legend">
            <div className="legend-item">
              <span className="box holiday"></span> Holiday
            </div>
            <div className="legend-item">
              <span className="box leave"></span> Leave
            </div>
            <div className="legend-item">
              <span className="box event"></span> Event
            </div>
          </div>
        </div>
        {showHolidays && (
          <div className="holiday-list">
            <div className="holiday-list-header">
              <h3>Holiday List</h3>
              <button className="close-button" onClick={toggleHolidayList}>×</button>
            </div>
            <ul>
              {holidays.map((holiday, index) => (
                <li key={index} className="holiday-item">
                  <div className="bullet" style={{ backgroundColor: getBulletColor(index) }}></div>
                  <div className="holiday-details">
                    <span className="holiday-date">{holiday.date.toLocaleDateString(undefined, { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                    <span className="holiday-name">{holiday.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

const getBulletColor = (index) => {
  const colors = ["#e57373", "#81c784", "#64b5f6", "#ffb74d", "#ba68c8", "#4db6ac", "#7986cb", "#a1887f", "#dce775", "#f06292"];
  return colors[index % colors.length];
};

export default Holiday;

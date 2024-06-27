import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import './Anotice.css';

const Notice = ({ notice, onDelete, onEdit }) => {
  const { date, eventName, description } = notice;

  return (
    <div className="notice">
      <div className="notice-info">
        <h3>{eventName}</h3>
        <p>{description}</p>
        <p>Date: {date}</p>
      </div>
      <div className="notice-actions">
        <button onClick={onDelete}>
          <FontAwesomeIcon icon={faTrashAlt} />
        </button>
        <button onClick={onEdit}>
          <FontAwesomeIcon icon={faEdit} />
        </button>
      </div>
    </div>
  );
};

const Anotice = () => {
  const [notices, setNotices] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [date, setDate] = useState('');
  const [eventName, setEventName] = useState('');
  const [description, setDescription] = useState('');

  const addNotice = (newNotice) => {
    setNotices([...notices, newNotice]);
  };

  const deleteNotice = (index) => {
    const updatedNotices = notices.filter((_, i) => i !== index);
    setNotices(updatedNotices);
  };

  const handleEdit = (index) => {
    setEditIndex(index);
    setDate(notices[index].date);
    setEventName(notices[index].eventName);
    setDescription(notices[index].description);
  };

  const saveEdit = (editedNotice) => {
    const updatedNotices = notices.map((notice, index) =>
      index === editIndex ? editedNotice : notice
    );
    setNotices(updatedNotices);
    setEditIndex(null);
    setDate('');
    setEventName('');
    setDescription('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNotice = { date, eventName, description };
    if (editIndex !== null) {
      saveEdit(newNotice);
    } else {
      addNotice(newNotice);
    }
    setDate('');
    setEventName('');
    setDescription('');
  };

  return (
    <div className="container">
      <div className="notice-form">
        <h2>{editIndex === null ? 'Add Notice' : 'Edit Notice'}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
          <input
            type="text"
            placeholder="Event Name"
            value={eventName}
            onChange={(e) => setEventName(e.target.value)}
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button type="submit">{editIndex === null ? 'Add Notice' : 'Save Notice'}</button>
        </form>
      </div>
      <div className="noticeboard">
        <h2>Noticeboard</h2>
        <div className="notices">
          {notices.map((notice, index) => (
            <Notice
              key={index}
              notice={notice}
              onDelete={() => deleteNotice(index)}
              onEdit={() => handleEdit(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Anotice;

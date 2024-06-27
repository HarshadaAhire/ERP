import React from 'react';
import { BsCheckCircle, BsClock, BsTrash, BsXCircle, BsPencil, BsTrashFill } from 'react-icons/bs';
import './Ticket.css';

const Ticket = () => {
  // Dummy data with placeholder images
  const ticketData = [
    { id: 1245, requestedBy: 'John Doe', requestedByImg: 'https://randomuser.me/api/portraits/men/1.jpg', priority: 'High', subject: 'Issue with the application performance under heavy load', status: 'Open', createdDate: '2024-06-20', dueDate: '2024-06-30' },
    { id: 1246, requestedBy: 'Jane Smith', requestedByImg: 'https://randomuser.me/api/portraits/women/2.jpg', priority: 'Medium', subject: 'Minor UI issue on the settings page', status: 'Open', createdDate: '2024-06-21', dueDate: '2024-07-01' },
    { id: 1247, requestedBy: 'Alice Johnson', requestedByImg: 'https://randomuser.me/api/portraits/women/3.jpg', priority: 'Low', subject: 'Suggestions for new features', status: 'Closed', createdDate: '2024-06-22', dueDate: '2024-07-02' },
    { id: 1248, requestedBy: 'Bob Brown', requestedByImg: 'https://randomuser.me/api/portraits/men/4.jpg', priority: 'High', subject: 'Critical bug in the payment gateway integration', status: 'Closed', createdDate: '2024-06-23', dueDate: '2024-07-03' },
  ];

  return (
    <div className="ticket-screen">
      <div className="tickets-heading">Tickets</div>
      <div className="cards-container">
        <div className="card total-tickets">
          <div className="icon-container">
            <BsCheckCircle className="icon" />
          </div>
          <div className="card-content">
            <h3>Total Tickets</h3>
            <p>100</p>
          </div>
        </div>
        <div className="card pending-tickets">
          <div className="icon-container">
            <BsClock className="icon" />
          </div>
          <div className="card-content">
            <h3>Pending Tickets</h3>
            <p>50</p>
          </div>
        </div>
        <div className="card deleted-tickets">
          <div className="icon-container">
            <BsTrash className="icon" />
          </div>
          <div className="card-content">
            <h3>Deleted Tickets</h3>
            <p>10</p>
          </div>
        </div>
        <div className="card closed-tickets">
          <div className="icon-container">
            <BsXCircle className="icon" />
          </div>
          <div className="card-content">
            <h3>Closed Tickets</h3>
            <p>40</p>
          </div>
        </div>
      </div>

      <div className="table-container">
        <button className="add-ticket-button">Add Ticket</button>
        <table>
          <thead>
            <tr>
              <th>ID No</th>
              <th>Requested By</th>
              <th>Priority</th>
              <th>Subject</th>
              <th>Status</th>
              <th>Created Date</th>
              <th>Due Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {ticketData.map((ticket) => (
              <tr key={ticket.id}>
                <td>#{ticket.id}</td>
                <td className="requested-by">
                  <img src={ticket.requestedByImg} alt={ticket.requestedBy} />
                  {ticket.requestedBy}
                </td>
                <td>
                  <span className={`priority-label priority-${ticket.priority.toLowerCase()}`}>
                    {ticket.priority}
                  </span>
                </td>
                <td>{ticket.subject}</td>
                <td>
                  <span className={`status-label status-${ticket.status.toLowerCase()}`}>
                    {ticket.status}
                  </span>
                </td>
                <td>{ticket.createdDate}</td>
                <td>{ticket.dueDate}</td>
                <td>
                  <button className="action-btn edit-btn"><BsPencil /></button>
                  <button className="action-btn delete-btn" style={{ marginLeft: '5px' }}><BsTrashFill /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Ticket;

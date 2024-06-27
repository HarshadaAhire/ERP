import React, { useState, useEffect } from 'react';
import './Aleave.css'; // Import your CSS file for styling

const Aleave = () => {
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    // Mock data for demonstration
    const mockData = [
      { id: 1, name: 'John Doe', description: 'Family vacation', days: 5, status: 'Pending' },
      { id: 2, name: 'Jane Smith', description: 'Sick leave', days: 3, status: 'Approved' },
      { id: 3, name: 'Alice Johnson', description: 'Personal reasons', days: 2, status: 'Rejected' },
      { id: 4, name: 'Bob Brown', description: 'Emergency leave', days: 4, status: 'Pending' },
      { id: 5, name: 'Emily White', description: 'Work-related travel', days: 3, status: 'Approved' }
    ];
    setLeaveRequests(mockData);
  }, []);

  const handleApproveReject = (id, status) => {
    // Update status in the backend or local state
    const updatedLeaveRequests = leaveRequests.map(request =>
      request.id === id ? { ...request, status } : request
    );
    setLeaveRequests(updatedLeaveRequests);
    setFilter(status.toLowerCase());
  };

  return (
    <div className="leave-management-container">
      <h1 className="h1">Leave Status</h1>
      <div className="filter-section">
        <button className={filter === 'all' ? 'active' : ''} onClick={() => setFilter('all')}>All</button>
        <button className={filter === 'approved' ? 'active' : ''} onClick={() => setFilter('approved')}>Approved</button>
        <button className={filter === 'rejected' ? 'active' : ''} onClick={() => setFilter('rejected')}>Rejected</button>
        <button className={filter === 'pending' ? 'active' : ''} onClick={() => setFilter('pending')}>Pending</button>
      </div>
      <div className="leave-requests">
        {leaveRequests
          .filter(request => filter === 'all' || request.status.toLowerCase() === filter)
          .map(request => (
            <div key={request.id} className="leave-request">
              <div className="h2">
                <strong>Name:</strong> {request.name}
              </div>
              <div className="h2">
                <strong>Description:</strong> {request.description}
              </div>
              <div className="h2">
                <strong>Days:</strong> {request.days}
              </div>
              <div className={`h2 status ${request.status.toLowerCase()}`}>
                <strong>Status:</strong> {request.status}
              </div>
              {request.status === 'Pending' && (
                <div className="actions">
                  <button className="approve" onClick={() => handleApproveReject(request.id, 'Approved')}>Approve</button>
                  <button className="reject" onClick={() => handleApproveReject(request.id, 'Rejected')}>Reject</button>
                  <button className="pending" onClick={() => handleApproveReject(request.id, 'Pending')}>Pending</button>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};

export default Aleave;

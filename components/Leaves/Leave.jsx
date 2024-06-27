import React, { useState } from 'react';
import './leaves.css';

const leaveTypes = [
  { name: 'Sick Leave', used: 2, remaining: 8 },
  { name: 'Maternity Leave', used: 0, remaining: 12 },
  { name: 'Casual Leave', used: 4, remaining: 6 },
  { name: 'Paid Leave', used: 1, remaining: 14 },
  { name: 'Unpaid Leave', used: 0, remaining: 0 },
  { name: 'Bereavement Leave', used: 0, remaining: 5 },
];

const dummyData = [
  { type: 'Sick Leave', fromDate: '2024-06-10', toDate: '2024-06-12', applyDate: '2024-06-08', reason: 'Feeling unwell' },
  { type: 'Casual Leave', fromDate: '2024-06-11', toDate: '2024-06-12', applyDate: '2024-06-09', reason: 'Personal work' },
  { type: 'Paid Leave', fromDate: '2024-06-13', toDate: '2024-06-15', applyDate: '2024-06-10', reason: 'Family event' },
];

function App() {
  const [leaves] = useState(leaveTypes);
  const [appliedLeaves, setAppliedLeaves] = useState([]);
  const [form, setForm] = useState({ type: '', fromDate: '', toDate: '', reason: '' });
  const [activeTab, setActiveTab] = useState('applyLeave');
  const [filter, setFilter] = useState('all');

  const handleApplyLeave = (e) => {
    e.preventDefault();
    const newLeave = { ...form, applyDate: new Date().toISOString().split('T')[0] };
    setAppliedLeaves([...appliedLeaves, newLeave]);
    setForm({ type: '', fromDate: '', toDate: '', reason: '' });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const calculateDuration = (fromDate, toDate) => {
    const from = new Date(fromDate);
    const to = new Date(toDate);
    return (to - from) / (1000 * 60 * 60 * 24) + 1;
  };

  const getTotalLeaves = () => {
    return leaves.length;
  };

  const getTotalBalance = () => {
    let totalBalance = 0;
    leaves.forEach(leave => {
      totalBalance += leave.remaining;
    });
    return totalBalance;
  };

  const filteredLeaves = () => {
    const now = new Date();
    const weekStart = new Date(now.setDate(now.getDate() - now.getDay()));
    const weekEnd = new Date(now.setDate(now.getDate() - now.getDay() + 6));
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    const monthEnd = new Date(now.getFullYear(), now.getMonth() + 1, 0);
    const yearStart = new Date(now.getFullYear(), 0, 1);
    const yearEnd = new Date(now.getFullYear(), 11, 31);

    if (filter === 'month') {
      const dummyLeavesThisMonth = dummyData.filter(leave => {
        const fromDate = new Date(leave.fromDate);
        return fromDate >= monthStart && fromDate <= monthEnd;
      });
      return [...appliedLeaves, ...dummyLeavesThisMonth];
    } else if (filter === 'week') {
      const dummyLeavesThisWeek = dummyData.filter(leave => {
        const fromDate = new Date(leave.fromDate);
        return fromDate >= weekStart && fromDate <= weekEnd;
      });
      return [...appliedLeaves, ...dummyLeavesThisWeek];
    } else if (filter === 'year') {
      const dummyLeavesThisYear = dummyData.filter(leave => {
        const fromDate = new Date(leave.fromDate);
        return fromDate >= yearStart && fromDate <= yearEnd;
      });
      return [...appliedLeaves, ...dummyLeavesThisYear];
    }
    return appliedLeaves;
  };

  return (
    <div className="leave-management">
      <div className="leave-grid">
        {leaves.map((leave, index) => (
          <div key={index} className={`leave-container bg-color-${index % 6}`}>
            <h3>{leave.name}</h3>
            <p>Used: {leave.used}</p>
            <p>Remaining: {leave.remaining}</p>
          </div>
        ))}
      </div>
      <div className="tab-container">
        <button className={`tab ${activeTab === 'applyLeave' ? 'active' : ''}`} onClick={() => setActiveTab('applyLeave')}>
          Apply for Leave
        </button>
        <button className={`tab ${activeTab === 'approvedLeaves' ? 'active' : ''}`} onClick={() => setActiveTab('approvedLeaves')}>
          Approved Leaves
        </button>
        <button className={`tab ${activeTab === 'leaveBalance' ? 'active' : ''}`} onClick={() => setActiveTab('leaveBalance')}>
          Leave Balance
        </button>
      </div>
      {activeTab === 'applyLeave' && (
        <form className="leave-form" onSubmit={handleApplyLeave}>
          <h3>Apply for Leave</h3>
          <label>
            Leave Type:
            <select name="type" value={form.type} onChange={handleFormChange} required>
              <option value="">Select</option>
              {leaves.map((leave, index) => (
                <option key={index} value={leave.name}>{leave.name}</option>
              ))}
            </select>
          </label>
          <label>
            From Date:
            <input type="date" name="fromDate" value={form.fromDate} onChange={handleFormChange} required />
          </label>
          <label>
            To Date:
            <input type="date" name="toDate" value={form.toDate} onChange={handleFormChange} required />
          </label>
          <label>
            Reason:
            <textarea name="reason" value={form.reason} onChange={handleFormChange} required></textarea>
          </label>
          <button type="submit">Apply</button>
        </form>
      )}
      {activeTab === 'approvedLeaves' && (
        <div className="approved-leaves">
          <h3>Approved Leaves</h3>
          <div className="filter-container">
            <label>
              Filter:
              <select value={filter} onChange={(e) => setFilter(e.target.value)}>
                <option value="all">All</option>
                <option value="month">This Month</option>
                <option value="week">This Week</option>
                <option value="year">This Year</option>
              </select>
            </label>
          </div>
          <ul>
            {filteredLeaves().map((leave, index) => (
              <li key={index}>
                <p><strong>Leave Type:</strong> {leave.type}</p>
                <p><strong>From:</strong> {leave.fromDate}</p>
                <p><strong>To:</strong> {leave.toDate}</p>
                <p><strong>Apply Date:</strong> {leave.applyDate}</p>
                <p><strong>Duration:</strong> {calculateDuration(leave.fromDate, leave.toDate)} days</p>
                <p><strong>Reason:</strong> {leave.reason}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === 'leaveBalance' && (
          <div className="balance-container">
        <div className="leave-balance">
          <h3>Total Leave Balance</h3>
          <p>Total Leaves: {getTotalLeaves()}</p>
          <p>Total Balance: {getTotalBalance()}</p>
        </div>
        </div>
      )}
    </div>
  );
}

export default App;

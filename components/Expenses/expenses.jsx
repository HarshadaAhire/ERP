import React, { useState } from 'react';
import './expenses.css';
import { FaEdit, FaTrash, FaWallet, FaCalendar, FaCalendarAlt, FaCalendarWeek } from 'react-icons/fa';

const Expenses = () => {
  const [transactions, setTransactions] = useState([]);
  const [startDate, setStartDate] = useState('');
  const [type, setType] = useState('Travel');
  const [amount, setAmount] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('Pending'); // New state for status
  const [isEditing, setIsEditing] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [filter, setFilter] = useState('All'); // New state for filter

  const addTransaction = () => {
    if (isEditing) {
      const updatedTransactions = [...transactions];
      updatedTransactions[currentIndex] = { startDate, type, amount, description, file, status };
      setTransactions(updatedTransactions);
      setIsEditing(false);
      setCurrentIndex(null);
    } else {
      setTransactions([...transactions, { startDate, type, amount, description, file, status }]);
    }
    resetForm();
  };

  const resetForm = () => {
    setStartDate('');
    setType('Travel');
    setAmount('');
    setDescription('');
    setFile(null);
    setStatus('Pending'); // Reset status to Pending
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const editTransaction = (index) => {
    const transaction = transactions[index];
    setStartDate(transaction.startDate);
    setType(transaction.type);
    setAmount(transaction.amount);
    setDescription(transaction.description);
    setFile(transaction.file);
    setStatus(transaction.status); // Set status for editing
    setIsEditing(true);
    setCurrentIndex(index);
  };

  const deleteTransaction = (index) => {
    setTransactions(transactions.filter((_, i) => i !== index));
  };

  const filterTransactions = () => {
    switch (filter) {
      case 'Approved':
        return transactions.filter(transaction => transaction.status === 'Approved');
      case 'Rejected':
        return transactions.filter(transaction => transaction.status === 'Rejected');
      case 'Pending':
        return transactions.filter(transaction => transaction.status === 'Pending');
      default:
        return transactions;
    }
  };

  const totalIncome = transactions
    .filter(transaction => transaction.type === 'Income')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const totalExpenses = transactions
    .filter(transaction => transaction.type !== 'Income')
    .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);

  const yearlyExpenses = totalExpenses; // Assuming all data is within one year for simplicity
  const monthlyExpenses = totalExpenses / 12;
  const weeklyExpenses = totalExpenses / 52;

  const balance = totalIncome - totalExpenses;

  return (
    <div className="expense-container">
      <div className="header1">
        <h1>Hi, Richard</h1>
        <p>Welcome back to your Expenses</p>
      </div>
      <div className="summary">
        <div className="summary-card total-expenses">
          <h2>Total Expenses <span className="icon-wrapper"><FaWallet /></span></h2>
          <p>Rs {totalExpenses}</p>
        </div>
        <div className="summary-card yearly-expenses">
          <h2>Yearly Expenses <span className="icon-wrapper"><FaCalendar /></span></h2>
          <p>Rs {yearlyExpenses}</p>
        </div>
        <div className="summary-card monthly-expenses">
          <h2>Monthly Expenses <span className="icon-wrapper"><FaCalendarAlt /></span></h2>
          <p>Rs {monthlyExpenses.toFixed(2)}</p>
        </div>
        <div className="summary-card weekly-expenses">
          <h2>Weekly Expenses <span className="icon-wrapper"><FaCalendarWeek /></span></h2>
          <p>Rs {weeklyExpenses.toFixed(2)}</p>
        </div>
      </div>
      <div className="transaction-section">
        <div className="add-transaction">
          <h2>{isEditing ? 'Edit Transaction' : 'Add Expense'}</h2>
          <input 
            type="date" 
            placeholder="Start Date" 
            value={startDate} 
            onChange={(e) => setStartDate(e.target.value)} 
          />
          <select 
            value={type} 
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Travel">Travel</option>
            <option value="Trip">Trip</option>
            <option value="Meeting">Meeting</option>
            {/* Add more options as needed */}
          </select>
          <input 
            type="number" 
            placeholder="Amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
          <input 
            type="text" 
            placeholder="Description" 
            value={description} 
            onChange={(e) => setDescription(e.target.value)} 
          />
          <input 
            type="file" 
            onChange={handleFileChange} 
          />
          
            
          <button onClick={addTransaction}>{isEditing ? 'Update' : 'Add Bill'}</button>
        </div>
        <div className="history">
          <h2>History</h2>
          <div className="filter-buttons">
            <button onClick={() => setFilter('All')}>All</button>
            <button onClick={() => setFilter('Pending')}>Pending</button>
            <button onClick={() => setFilter('Approved')}>Approved</button>
            <button onClick={() => setFilter('Rejected')}>Rejected</button>
          </div>
          <table>
            <thead>
              <tr>
                <th>Start Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Description</th>
                <th>Upload Bill</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filterTransactions().map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.startDate}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td className="description-cell">{transaction.description}</td>
                  <td>{transaction.file ? transaction.file.name : 'No file'}</td>
                  <td>{transaction.status}</td>
                  <td>
                    <button onClick={() => editTransaction(index)}><FaEdit /></button>
                    <button onClick={() => deleteTransaction(index)}><FaTrash /></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Expenses;

import React, { useState } from 'react';

const DateFilter = ({ onDateFilterChange }) => {
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');

  const handleFromChange = (e) => {
    setFromDate(e.target.value);
    onDateFilterChange(e.target.value, toDate);
  };

  const handleToChange = (e) => {
    setToDate(e.target.value);
    onDateFilterChange(fromDate, e.target.value);
  };

  return (
    <div>
      <label htmlFor="fromDate">From:</label>
      <input type="date" id="fromDate" onChange={handleFromChange} />
      <label htmlFor="toDate">To:</label>
      <input type="date" id="toDate" onChange={handleToChange} />
    </div>
  );
};

export default DateFilter;

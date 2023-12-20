import React from 'react';
import { useState } from 'react';
import DeleteButton from './DeleteButton';


const TransactionTable = ({ data, onDelete }) => {
  const [sortedData, setSortedData] = useState(data);

  const handleSort = () => {
    const sorted = [...sortedData].sort((a, b) => {
      const dateA = new Date(a.date.split('/').reverse().join('-'));
      const dateB = new Date(b.date.split('/').reverse().join('-'));

      if (sortOrder === 'asc') {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });

    setSortedData(sorted);
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };


  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th><button onClick={handleSort} style={{backgroundColor: 'rgb(190, 214, 190)', border: 'none', padding: '1px', height: '25px', width: '60px', textAlign: 'center'}}> DATE ↕ </button></th>
          <th>BRANCH</th>
          <th>TYPE</th>
          <th>AMOUNT (INR)</th>
          <th>BANK</th>
          <th>REQUESTED BY</th>
          <th>STATUS</th>
          <th></th>
        </tr>
      </thead>
      <tbody >
        {data.map((transaction) => (
          <tr key={transaction.id}>
            <td>{transaction.id}</td>
            <td>{transaction.date}</td>
            <td>{transaction.branch}</td>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.bank}</td>
            <td>{transaction.requestedBy}</td>
            <td>{transaction.status}</td>
            <td style={{padding: '0px'}}>
              <DeleteButton onDelete={() => onDelete(transaction.id)} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionTable;

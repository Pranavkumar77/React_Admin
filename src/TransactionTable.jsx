import React from 'react';
import DeleteButton from './DeleteButton';


const TransactionTable = ({ data, onDelete }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>DATE</th>
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

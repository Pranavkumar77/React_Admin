import React from 'react';



const DeleteButton = ({ onDelete }) => {
  return <button style={{margin: '0px', padding: '0px', border: 'none', borderRadius: '50%'}} onClick={onDelete} ><img style={{height: '20px', width: '20px'}} src='https://tse2.mm.bing.net/th?id=OIP.4JBpWX0h4-eJMBpWZxo65gHaHZ&pid=Api&P=0&h=180' alt="Delete"/>
  </button>;
};

export default DeleteButton;

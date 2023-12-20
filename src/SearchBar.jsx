import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const searchText = event.target.value;
    onSearch(searchText);
  };
return (
    <input
    style={{height: '20px', width: '200px', borderRadius: '5px'}}
      type="text"
      onChange={handleInputChange}
      placeholder="Search by ID..."
    />
  );
};

export default SearchBar;
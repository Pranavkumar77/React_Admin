import React from 'react';

const SearchBar = ({ onSearch }) => {
  const handleInputChange = (event) => {
    const searchText = event.target.value;
    onSearch(searchText);
  };
return (
    <input
      type="text"
      onChange={handleInputChange}
      placeholder="Search by ID..."
    />
  );
};

export default SearchBar;
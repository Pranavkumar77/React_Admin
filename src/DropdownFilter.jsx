import React from 'react';

const DropdownFilter = ({ options, onSelectFilter }) => {
  return (
    <div>
      <select onChange={(e) => onSelectFilter(e.target.value)}>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownFilter;
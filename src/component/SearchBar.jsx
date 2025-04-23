import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="flex items-center justify-center ">
      <br></br>
      <input 
        type="text"
        placeholder="Search books..."
        className="w-[50vh] p-2 border rounded"
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </div>
  );
};

export default SearchBar;

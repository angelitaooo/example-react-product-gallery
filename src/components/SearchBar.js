import React from 'react';

const SearchBar = ({searchChange}) => {
  return (
    <div>
      <input
        type="search"
        placeholder="Search products by name"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBar;

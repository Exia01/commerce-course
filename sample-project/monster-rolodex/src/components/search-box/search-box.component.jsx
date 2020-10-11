import React from 'react';

import './search-box.styles.css';

// purely functional component
export default function SearchBox({placeholder,handleChange}) {
  return (
    <input
      className='search'
      type='search'
      placeholder={placeholder}
      // React Synthetic Event  --> hence the camelCase
      onChange={handleChange}
    />
  );
}

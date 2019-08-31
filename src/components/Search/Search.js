import React from 'react';
import './Search.css';

const Search = ({ onSearch, activeCount, inactiveCount }) => (
  <div className='searchWrapper'>
    <input className='search' onChange={event => onSearch(event.target.value)} />
    <div className='readings'>
      <div className='readingWrapper'>
        <span className='active'>{activeCount}</span>
        <span className='label'>active readings</span>
      </div>
      <div className='readingWrapper'>
        <span className='inactive'>{inactiveCount}</span>
        <span className='label'>inactive readings</span>
      </div>
    </div>
  </div>
);

export default Search;

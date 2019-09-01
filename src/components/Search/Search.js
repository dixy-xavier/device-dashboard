import React from 'react';
import './Search.css';

const Count = ({ type, count }) => (
  <div className='readingWrapper'>
    <span className={type}>{count}</span>
    <span className='label'>{`${type} readings`}</span>
  </div>
);

const Counts = ({ activeCount, inactiveCount }) => (
  <div className='readings'>
    <Count count={activeCount} type="active" />
    <Count count={inactiveCount} type="inactive" />
  </div>
);

const Search = ({ onSearch, activeCount, inactiveCount }) => (
  <div className='searchWrapper'>
    <input className='search' placeholder="Search..." onChange={event => onSearch(event.target.value)} />
    <Counts activeCount={activeCount} inactiveCount={inactiveCount} />
  </div>
);

export default Search;

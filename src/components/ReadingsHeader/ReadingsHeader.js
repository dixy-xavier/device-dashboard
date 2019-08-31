import React from 'react';
import './ReadingsHeader.css';

const ReadingsHeader = ({ columns }) => (
  <div className='headerWrapper'>
    {columns.map(header => (
      <div key={header} className='headerCell'>{header}</div>
    ))}
  </div>
);

export default ReadingsHeader;

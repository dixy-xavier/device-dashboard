import React from 'react';
import './Readings.css';
import { convertTimeToDate } from '../../utils/utils';

const getValue = (key, value) => {
  switch(key) {
    case 'value': return value.toFixed(2);
    case 'timestamp': return convertTimeToDate(value);
    default: return value === '' ? '--' : value;
  }
};

const ReadingCard = ({ reading }) => (
  <div className='cardWrapper'>
    {Object.entries(reading).map(([key, value]) => (
      <div key={key} className='cell'>
        {getValue(key, value)}
      </div>
    ))}
  </div>
);

const Readings = ({ readings }) => (
  <div className='dataWrapper'>
    {readings.map(item => (
      <ReadingCard key={item.name} reading={item} />
    ))}
  </div>
);

export default Readings;

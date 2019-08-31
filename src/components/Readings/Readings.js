import React from 'react';
import { convertTimeToDate } from '../../utils/utils';
import './Readings.css';

const getValue = (key, value, onStatusClick) => {
  switch(key) {
    case 'value': return value.toFixed(2);
    case 'timestamp': return convertTimeToDate(value);
    case 'active': return <div className='status' onClick={onStatusClick}>
      <div className={value ? 'statusOn' : 'statusOff'} />
      <div className={value ? 'activeButton' : 'inactiveButton'} />
    </div>;
    default: return value === '' ? '--' : value;
  }
};

const ReadingCard = ({ reading, onStatusClick }) => (
  <div className='cardWrapper'>
    {Object.entries(reading).map(([key, value]) => (
      <div key={key} className='cell'>
        {getValue(key, value, onStatusClick)}
      </div>
    ))}
  </div>
);

const Readings = ({ readings, onStatusClick }) => (
  <div className='dataWrapper'>
    {readings.map(item => (
      <ReadingCard key={item.name} reading={item} onStatusClick={() => onStatusClick(item.name, !item.active)} />
    ))}
  </div>
);

export default Readings;

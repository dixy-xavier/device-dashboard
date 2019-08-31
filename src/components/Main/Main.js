import React, { useEffect, useState } from 'react';
import { GET_READINGS } from '../../constants/urls';
import { request } from '../../utils/utils';
import Readings from '../Readings/Readings';
import ReadingsHeader from '../ReadingsHeader/ReadingsHeader';
import  './Main.css';
import Search from '../Search/Search';

const getColumnHeaders = readings => (readings.length) ? Object.keys(readings[0]) : [];

const Main = () => {
  const [readings, setReadings] = useState([]);
  const [searchText, onSearch] = useState('');
  useEffect(() => {
    if (!readings.length) {
      request(GET_READINGS).then(response => setReadings(response.data));
    }
  });
  const filteredReadings = readings.filter(reading => reading.name.includes(searchText));
  const activeCount = filteredReadings.filter(reading => reading.active).length;
  return (
    <div className='mainWrapper'>
      <Search
        onSearch={text => onSearch(text)}
        activeCount={activeCount}
        inactiveCount={filteredReadings.length - activeCount}
      />
      <ReadingsHeader columns={getColumnHeaders(readings)} />
      <Readings readings={filteredReadings} searchText={searchText} />
    </div>
  );
};

export default Main;

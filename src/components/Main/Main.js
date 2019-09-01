import React, { Component } from 'react';
import { GET_READINGS, UPDATE_ACTIVE_STATUS } from '../../constants/urls';
import { queryObjToSearchStr, replaceParams, request } from '../../utils/utils';
import Loader from '../Loader/Loader';
import Readings from '../Readings/Readings';
import ReadingsHeader from '../ReadingsHeader/ReadingsHeader';
import Search from '../Search/Search';
import './Main.css';
import Toast from '../Toast/Toast';

const getColumnHeaders = readings => (readings.length) ? Object.keys(readings[0]) : [];

class Main extends Component {
  constructor() {
    super();
    this.state = {
      readings: [],
      searchText: '',
      error: '',
      loading: false
    };
    this.onStatusClick = this.onStatusClick.bind(this);
  }

  componentDidMount() {
    this.setState({ loading: true });
    request(GET_READINGS).then(response => this.setState({
      readings: response.data,
      loading: false
    }));
  }

  onStatusClick(name, value) {
    this.setState({ loading: true });
    const url = queryObjToSearchStr(
      replaceParams(UPDATE_ACTIVE_STATUS, { readingName: name }),
      { active: value },
    );
    request(url, 'PATCH').then(response => {
      if (response === 'OK') {
        const index = this.state.readings.findIndex(reading => reading.name === name);
        const readings = [...this.state.readings];
        readings[index].active = value;
        this.setState({ readings, loading: false });
      } else {
        this.setState({ loading: false, error: response });
        setTimeout(() => this.setState({ error: ''}), 3000)
      }
    });
  }

  render() {
    const { error, loading, readings, searchText } = this.state;
    const filteredReadings = readings.filter(reading => reading.name.includes(searchText));
    const activeCount = filteredReadings.filter(reading => reading.active).length;
    return (
      <div className='mainWrapper'>
        {!!error && <Toast error={error} />}
        {loading && <Loader />}
        <Search
          onSearch={text => this.setState({ searchText: text })}
          activeCount={activeCount}
          inactiveCount={filteredReadings.length - activeCount}
        />
        {filteredReadings.length ? (
          <>
            <ReadingsHeader columns={getColumnHeaders(readings)} />
            <Readings readings={filteredReadings} searchText={searchText} onStatusClick={this.onStatusClick} />
          </>
        ) : <h2 className='noData'>No data found</h2>}
      </div>
    );
  }
}

export default Main;

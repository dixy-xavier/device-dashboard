import moment from 'moment';

/**
 *  This function takes url path and calls fetch service and
 *  returns a promise which will give the response object
 */
export const request = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

/**
 *  This function takes timestamp and converts
 *  to date format DD-MM-YYYY
 */
export const convertTimeToDate = timestamp => moment(timestamp).format('DD-MM-YYYY');

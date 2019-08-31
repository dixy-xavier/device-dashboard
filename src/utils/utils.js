import moment from 'moment';

/**
 *  This function takes url path and calls fetch service and
 *  returns a promise which will give the response object
 */
export const request = async (url, method) => {
  const settings = { method: 'PATCH' };
  const response = await fetch(url, method && settings);
  return await response.json();
};

/**
 *  This function takes url path and json object as parameter and
 *  returns the path with the replaced path params.
 */
export const replaceParams = (path, params = {}) => Object.keys(params)
  .reduce((prev, next) => prev.replace(new RegExp(`:${next}`, 'g'), params[next]), path);

/**
 *  This function takes url path and json object as parameter and returns it as a
 *  query string. If the object is empty, an empty string is returned
 */
export const queryObjToSearchStr = (url, queryObj) => {
  const keys = Object.keys(queryObj);
  let queryStr = '';
  if (keys.length) {
    const firstKey = keys.shift();
    queryStr = queryStr.concat('?', firstKey, '=', queryObj[firstKey]);
  }
  return `${url}${keys.reduce((prev, next) => prev.concat('&', next, '=', queryObj[next]), queryStr)}`;
};

/**
 *  This function takes timestamp and converts
 *  to date format DD-MM-YYYY
 */
export const convertTimeToDate = timestamp => moment(timestamp).format('DD-MM-YYYY');

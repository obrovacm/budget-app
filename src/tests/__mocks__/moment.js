// Mocked 'moment.js' is created in order to test React components that 
// use it (because snapshots will never be the same since moment is configured
// to produce a current time value)

const moment = require.requireActual('moment');

// import moment from 'moment'; // wouldn't work, so we use Jest's function
// to set up this special 'default' value of a moment, which jest knows it 
// should use when testing, since it's in this special "__mocks__" folder

export default (timestamp = 0)=>{
  return moment(timestamp);
};
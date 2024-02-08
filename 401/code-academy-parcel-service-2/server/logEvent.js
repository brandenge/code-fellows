'use strict';

module.exports = (event, payload) => {
  console.log('EVENT:', {
    event,
    time: new Date().toString(),
    payload,
  });
};

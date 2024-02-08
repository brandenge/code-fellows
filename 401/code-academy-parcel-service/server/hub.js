'use strict';

const eventPool = require('./eventPool');
const logEvent = require('./logEvent');
require('../vendors/vendorEvents');
require('../drivers/driverEvents');

eventPool.on('PICKUP', (order) => {
  logEvent('PICKUP', order);
});

eventPool.on('IN-TRANSIT', (order) => {
  logEvent('IN-TRANSIT', order);
});

eventPool.on('DELIVERED', (order) => {
  logEvent('DELIVERED', order);
});

'use strict';

const eventPool = require('../server/eventPool');

eventPool.on('PICKUP', (order) => {
  setTimeout(() => {
    console.log(`DRIVER: picked up order ID: ${order.id}`);
    eventPool.emit('IN-TRANSIT', order);
  }, 3000);
  setTimeout(() => {
    console.log(`DRIVER: delivered order ID: ${order.id}`);
    eventPool.emit('DELIVERED', order);
  }, 6000);
});

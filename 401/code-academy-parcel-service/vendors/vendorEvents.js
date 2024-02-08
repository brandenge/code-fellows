'use strict';

const eventPool = require('../server/eventPool');
const Order = require('./order');

eventPool.on('DELIVERED', (order) => {
  console.log(`VENDOR: Thank your for delivering order ID: ${order.id}`);
});

eventPool.on('NEW_ORDER', (order) => {
  setTimeout(() => eventPool.emit('PICKUP', order), 3000);
});

setInterval(() => {
  const order = new Order();
  eventPool.emit('NEW_ORDER', order);
}, 12000);

const order = new Order();
eventPool.emit('NEW_ORDER', order);

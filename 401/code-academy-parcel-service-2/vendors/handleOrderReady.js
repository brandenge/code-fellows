'use strict';

const Order = require('./order');

module.exports = (socket) => {
  setInterval(() => {
    const order = new Order();
    socket.emit('join', order.store);
    console.log(`----- Order ID ${order.id} ready for pickup -----`);
    socket.emit('pickup', order);
  }, 10000);
};

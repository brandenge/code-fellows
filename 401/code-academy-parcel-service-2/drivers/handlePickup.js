'use strict';

module.exports = (socket) => (order) => {
  setTimeout(() => {
    console.log(`DRIVER: picked up order ID: ${order.id}`);
    socket.emit('in-transit', order);
  }, 1500);
  setTimeout(() => {
    console.log(`DRIVER: delivered order ID: ${order.id}`);
    socket.emit('delivered', order);
  }, 3000);
};

'use strict';

const { Server } = require('socket.io');
const logEvent = require('./logEvent');
const PORT = process.env.PORT || 3002;

const server = new Server(PORT);

const caps = server.of('/caps');

caps.on('connection', (socket) => {
  console.log(`Socket connected to the CAPS namespace at socket ID ${socket.id}`);
  socket.onAny(logEvent);
  socket.on('pickup', (order) => socket.broadcast.emit('pickup', order));
  socket.on('in-transit', (order) =>  caps.in(order.store).emit('in-transit', order));
  socket.on('delivered', (order) => caps.in(order.store).emit('delivered', order));
  socket.on('join', (room) => {
    socket.join(room);
    console.log(`You have joined the room for ${room}`);
  });
});

'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3002/caps');

const handleOrderReady = require('./handleOrderReady');
const handleDelivered = require('./handleDelivered');

socket.on('delivered', handleDelivered);
handleOrderReady(socket);

'use strict';

module.exports = (event, order) => {
  console.log(`EVENT: { event: '${event}',
  time: ${new Date().toString()},
  payload:
  { store: '${order.company}',
    orderID: '${order.id}',
    customer: '${order.customer}',
    address: '${order.address}' } }`);
};

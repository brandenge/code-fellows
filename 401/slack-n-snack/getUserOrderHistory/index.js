'use strict';

const qs = require('querystring');
const https = require('https');
const AWS = require('aws-sdk');
AWS.config.update({region: 'us-west-2'});
const dynamodb = new AWS.DynamoDB.DocumentClient();

function formatString(data) {
  const ordersArray = data.Items.map(order =>
    `ORDER ID: ${order.id}
        CUSTOMER: ${order.clientId}
        STORE NAME: ${order.storeName}
        MEALS: ${order.userOrder.meal}
        SIDES: ${order.userOrder.side}
        DRINKS: ${order.userOrder.drink}
        TOTAL COST: ${order.userOrder.cost.toFixed(2)}`);
  return ordersArray.join('\n\n');
}

exports.handler = async (event) => {

  const buffer = new Buffer.from(event.body, 'base64');
  const token = buffer.toString('ascii');
  const parsedToken = qs.parse(token);

  var params = {
    TableName : 'slack-n-snack',
    FilterExpression : 'clientId = :user',
    ExpressionAttributeValues : {':user' : parsedToken.user_name },
  };

  try {
    const data = await dynamodb.scan(params).promise();
    const payload = JSON.stringify({ text: `ORDER HISTORY FOR ${parsedToken.user_name}:

${formatString(data)}` });

    const options = {
      hostname: 'hooks.slack.com',
      path: 'https://hooks.slack.com/services/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',
      method: 'POST',
    };

    const req = https.request(options,
      (res) => res.on('data', () => console.log('getFullOrderHistory HTTP REQUEST SUCCESSFUL')));
    req.on('error', (error) => console.log('ERROR IN getFullOrderHistory HTTP REQUEST:', error));
    req.write(payload);
    req.end();

  } catch (e) {
    console.error('ERROR IN getUserOrderHistory DATABASE OPERATION:', e.message);
  }
};

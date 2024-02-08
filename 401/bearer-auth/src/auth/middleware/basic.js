'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {
  if (!req.headers.authorization) next('No Auth String');
  const basic = req.headers.authorization.split(' ')[1];
  const [ username, password ] = base64.decode(basic).split(':');
  try {
    req.user = await users.authenticateBasic(username, password);
    next();
  } catch (e) {
    console.error('Error in basic.js:', e.message);
    res.status(403).send('Invalid Login');
  }
}

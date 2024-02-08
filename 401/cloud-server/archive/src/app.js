'use strict';

const express = require('express');
const notFound = require('./error-handlers/404');
const errorHandler = require('./error-handlers/500');
const PORT = process.env.PORT || 3002;

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).send('Hello World from my Express server');
});

app.get('/hello', (req, res, next) => {
  const { name } = req.query;
  res.status(200).send(`Greetings ${name}!`);
});


app.get('/bad', (req, res, next) => {
  next('This is a bad route that resulted in an error');
});

app.use('*', notFound);

app.use(errorHandler);

function start() {
  app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
}

module.exports = { app, start };

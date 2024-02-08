'use strict';

const supertest = require('supertest');
const { app } = require('../src/server');
const request = supertest(app);

describe('Test catch-all route', () => {
  it('correctly calls the 404 middleware', async () => {
    let response = await request.get('/invalidRoute').send();
    console.log('Response body from catch-all route:', response.body);
    expect(response.status).toEqual(404);
    expect(response.body.error).toEqual(404);
    expect(response.body.route).toEqual('/invalidRoute');
    expect(response.body.message).toEqual('Not Found');
  });
});

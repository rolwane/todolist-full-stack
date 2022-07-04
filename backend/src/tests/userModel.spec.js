const userModel = require('../models/userModel');
const connection = require('../models/connection');
const jwt = require('jsonwebtoken');

describe('Test userModel', () => {

  it('Should registerNewUser return a token', async () => {
    connection.execute = jest.fn().mockResolvedValue([ [] ]);
    jwt.sign = jest.fn().mockResolvedValue('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');

    const response = await userModel.registerNewUser({});
    expect(response).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9');
  });

  it('Should getUserByEmail return correctly', async () => {
    connection.execute = jest.fn().mockResolvedValue([[]]);
    const response = await userModel.getUserByEmail();

    expect(response).toEqual([]);
  });

});

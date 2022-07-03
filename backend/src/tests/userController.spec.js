const userController = require('../controllers/userController');
const userService = require('../services/userService');

describe('Test userController', () => {

  it('Should registerNewUser middleware return status code 201 and calls json method with a token', async () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9';

    userService.registerNewUser = jest.fn().mockResolvedValue(token);

    request = {}

    response = {
      status: jest.fn().mockReturnValue({
        json: jest.fn(),
      }),
    }

    await userController.registerNewUser(request, response);

    expect(response.status).toHaveBeenCalledWith(201);
    expect(response.status().json).toHaveBeenCalledWith({ token });
  });

});

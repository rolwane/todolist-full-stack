const taskController = require('../controllers/taskController');
const taskService = require('../services/taskService');

describe('Test taskController', () => {

  it(`Should getAllByUserId method return status 200 and the user's task list`, async () => {

    taskService.getAllByUserId = jest.fn().mockResolvedValue([]);

    const request = {
      body: {
        userId: 0,
      },
    }

    const response = {
      status: jest.fn().mockReturnValue({
        json: jest.fn(),
      })
    }

    await taskController.getAllByUserId(request, response);

    expect(response.status).toHaveBeenCalledWith(200);
    expect(response.status().json).toHaveBeenCalledWith([]);

  });

});
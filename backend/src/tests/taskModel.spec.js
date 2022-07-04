const taskModel = require('../models/taskModel');
const connection = require('../models/connection');

describe('Test taskModel', () => {

  it('Should getAllByUserId return correctly', async () => {
    connection.execute = jest.fn().mockResolvedValue([[]]);
    const response = await taskModel.getAllByUserId(0);
    
    expect(response).toEqual([]);
  });

});
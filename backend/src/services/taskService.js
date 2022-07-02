const taskModel = require('../models/taskModel');

const getAllByUserId = async (id) => {
  const response = await taskModel.getAllByUserId(id);
  return response;
};

module.exports = {
  getAllByUserId,
};

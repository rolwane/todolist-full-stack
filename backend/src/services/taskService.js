const taskModel = require('../models/taskModel');

const getAllByUserId = async (id) => {
  const response = await taskModel.getAllByUserId(id);
  return response;
};

const addNewTask = async (data) => {
  const response = await taskModel.addNewTask(data);
  return response;
};

module.exports = {
  getAllByUserId,
  addNewTask,
};

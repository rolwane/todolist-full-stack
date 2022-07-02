const taskModel = require('../models/taskModel');

const getAllByUserId = async (id) => {
  const response = await taskModel.getAllByUserId(id);
  return response;
};

const addNewTask = async (data) => {
  const response = await taskModel.addNewTask(data);
  return response;
};

const deleteTask = async (id) => {
  const response = await taskModel.deleteTask(id);
  return response;
};

module.exports = {
  getAllByUserId,
  addNewTask,
  deleteTask,
};

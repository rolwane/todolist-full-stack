const taskService = require('../services/taskService');

const getAllByUserId = async ({ body }, response) => {
  const serviceResponse = await taskService.getAllByUserId(body.id);
  return response.status(200).json(serviceResponse);
};

const addNewTask = async ({ body }, response) => {
  const serviceResponse = await taskService.addNewTask(body);
  return response.status(201).json(serviceResponse);
};

const deleteTask = async ({ params }, response) => {
  const serviceResponse = await taskService.deleteTask(params.id);
  return response.status(200).json(serviceResponse);
};

module.exports = {
  getAllByUserId,
  addNewTask,
  deleteTask,
};

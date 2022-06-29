const userModel = require('../models/userModel');

const registerNewUser = async (user) => {
  const response = await userModel.registerNewUser(user);
  return response;
};

const getUserByEmail = async (email) => {
  const response = await userModel.getUserByEmail(email);
  return response;
};

module.exports = {
  registerNewUser,
  getUserByEmail,
};

const userModel = require('../models/userModel');

const registerNewUser = async (user) => {
  const response = await userModel.registerNewUser(user);
  return response;
};

module.exports = {
  registerNewUser,
};

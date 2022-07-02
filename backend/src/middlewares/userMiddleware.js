const userService = require('../services/userService');
const joi = require('joi');

const settings = {
  name: joi.string().min(3).required(),
  email: joi.string().email().required(),
  password: joi.string().min(8).required(),
};

const loginSettings = {
  email: joi.string().email().required(),
  password: joi.string().required(),
};

const validateBody = (request, response, next) => {
  const schema = joi.object(settings);
  const { error } = schema.validate(request.body);

  if (error) {
    return response.status(422).json({ error: error.message });
  }

  next();
};

const validateLoginBody = (request, response, next) => {
  const schema = joi.object(loginSettings);
  const { error } = schema.validate(request.body);

  if (error) {
    return response.status(422).json({ error: error.message });
  }

  next();
};

const checkUserAlreadyExists = async ({ body }, response, next) => {
  const foundUser = await userService.getUserByEmail(body.email);

  if (foundUser.length > 0) {
    return response.status(422).json({ error: 'Email provided is already registered' });
  }

  next();
};

module.exports = {
  validateBody,
  checkUserAlreadyExists,
  validateLoginBody,
};

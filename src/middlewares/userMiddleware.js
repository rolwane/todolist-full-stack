const joi = require('joi');

const validateBody = ({ body }, response, next) => {
  const schema = joi.object({
    name: joi.string().min(3).required(),
    email: joi.string().email().required(),
    password: joi.string().min(8).required(),
  });

  const { error } = schema.validate(body);

  if (error) {
    return response.status(422).json({ error: error.message });
  }

  next();
};

module.exports = {
  validateBody,
};

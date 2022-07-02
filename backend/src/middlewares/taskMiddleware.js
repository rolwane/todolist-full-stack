const joi = require('joi');

const getMethodSettings = {
  id: joi.number().required(),
};

const validateGetBody = (request, response, next) => {

  const schema = joi.object(getMethodSettings);
  
  const { error } = schema.validate(request.body);

  if (error) {
    return response.status(422).json({ error: error.message });
  }

  next();
};

module.exports = {
  validateGetBody,
};

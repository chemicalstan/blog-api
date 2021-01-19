const Joi = require("joi");
const { status, errorMessage } = require("../helpers/status");
/**
 * empty helper method
 * @param {string, integer} input
 * @returns {Boolean} True or False
 */
const empty = input => {
  if (input === undefined || input === "") {
    return true;
  }
};

/**
 * validate user payload
 * @param {object} req
 * @param {object} res
 * @param {object} next
 * @returns {object || error} next param | error
 */
const createUserValidate = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string()
      .email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } })
      .required()
  });

  try {
    const { name, email } = req.body;
    const result = await schema.validateAsync({ name, email });
    next();
  } catch (error) {
    errorMessage.error = error.details[0].message;
    return res.status(status.bad).send(errorMessage);
  }
};

const createArticleValidate = async (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    userId: Joi.number().required()
  });

  try {
      const { title, content, userId } = req.body;
      await schema.validateAsync({title, content, userId});
      next();
  } catch (error) {
      errorMessage.error = error.details[0].message;
      return res.status(status.bad).send(errorMessage);
  }
};

module.exports = {
  createUserValidate,
  createArticleValidate
};

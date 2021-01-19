const db = require("../models");
const User = db.User;
const { empty, successMessage, status, errorMessage } = require("../helpers/validations");

const createUser = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    errorMessage.error = 'name and email field must not be empty';
    return res.status(status['bad']).send(errorMessage);
  }

  try {
      const user = await User.create({
        name,
        email
      });
      successMessage.success = 'User created';
      successMessage.data = user
      return res.status(status['success']).send(successMessage);
  } catch (error) {
      errorMessage.msg = error;
      errorMessage.error = 'user could not be created';
      return res.status(status['error']).send(errorMessage)
  }

};

module.exports = {
  createUser
};

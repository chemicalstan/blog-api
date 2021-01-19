const db = require("../models");
const User = db.User;
const { successMessage, status, errorMessage } = require("../helpers/status");

const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await User.create({
      name,
      email
    });
    successMessage.message = "User created";
    successMessage.data = user;
    return res.status(status["success"]).send(successMessage);
  } catch (error) {
    errorMessage.msg = error.message;
    errorMessage.error = "user could not be created";
    return res.status(status["error"]).send(errorMessage);
  }
};

module.exports = {
  createUser
};

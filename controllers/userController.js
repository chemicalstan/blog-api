const db = require("../models");
const User = db.User;
const { successMessage, status, errorMessage } = require("../helpers/status");

/**
 * Create users
 * @param {object} req
 * @param {object} res
 * @returns {object} reflection object
 */
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
    errorMessage.error = error.message;
    errorMessage.message = "user could not be created";
    return res.status(status["error"]).send(errorMessage);
  }
};

/**
 * Get all users
 * @param {object} req
 * @param {object} res
 * @returns {object} users array
 */
const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    successMessage.data = users;
    return res.status(status.success).json(successMessage);
  } catch (error) {
    errorMessage.error = error.message;
    return res.status(status.error).send(errorMessage);
  }
};
/**
 * Get user by id
 * @param {object} req
 * @param {object} res
 * @returns {object} user object
 */
const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOne({
      where: {
        id: id
      }
    });
    if (!user) {
      errorMessage.error = "This user does not exist";
      return res.status(status.notfound).send(errorMessage);
    }
    successMessage.data = user;
    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = error.message;
    return res.status(status.error).send(errorMessage);
  }
};

/**
 * Update a user
 * @param {objec} req
 * @param {objec} res
 * @returns {object} reflection object
 */
const updateUser = async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    const updatedUser = await User.update(
      { name, email },
      {
        where: {
          id: id
        }
      }
    );
    if (!updatedUser[0] === true) {
      errorMessage.error = 'This user does not exist'
      return res.status(status.notfound).send(errorMessage)
    }
    successMessage.data = 'User updated';
    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = error.message;
    return res.status(status.error).send(errorMessage);
  }
};

/**
 * Delete a user
 * @param {object} req
 * @param {object} res
 * @returns {void} User deleted
 */
const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedUser = await User.destroy({
      where: {
        id: id
      }
    })
    if (!deletedUser) {
      errorMessage.error = 'This user does not exist';
      return res.status(status.notfound).send(errorMessage);
    }
    successMessage.data = 'User deleted';
    return res.status(status.success).send(successMessage)
  } catch (error) {
    errorMessage = `This user could not be deleted ${error.message}`;
    return res.status(status.error).send(errorMessage);
  }
};
module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};

const express = require('express');
const route = express.Router();
const { UserPayloadValidate } = require('../middlewares/validations')


const { createUser, getAllUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');

route.get('/users', getAllUsers);
route.get('/users/:id', getUserById);
route.post('/users', UserPayloadValidate, createUser);
route.put('/users/:id', UserPayloadValidate, updateUser);
route.delete('/users/:id', deleteUser);

module.exports = route;
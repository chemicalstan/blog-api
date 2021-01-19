const express = require('express');
const route = express.Router();
const { createUserValidate } = require('../middlewares/validations')


const { createUser } = require('../controllers/userController');

route.post('/users', createUserValidate, createUser);

module.exports = route;
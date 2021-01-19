const express = require('express');
const route = express.Router();

const { createUser } = require('../controllers/userController');

route.post('/users', createUser)

module.exports = route;
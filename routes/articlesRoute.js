const express = require('express');
const route = express.Router();
const { createArticle } = require('../controllers/articleController');

route.post('/articles', createArticle)

module.exports = route;
const express = require('express');
const route = express.Router();
const { createArticle } = require('../controllers/articleController');
const { createArticleValidate } = require('../middlewares/validations');

route.post('/articles', createArticleValidate, createArticle);

module.exports = route;
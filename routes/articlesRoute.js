const express = require('express');
const route = express.Router();
const { createArticle, getAllArticles, getArticleById, updateArticle, deleteArticle } = require('../controllers/articleController');
const { ArticlePayloadValidate } = require('../middlewares/validations');

route.get('/articles', getAllArticles);
route.get('/articles/:id', getArticleById);
route.post('/articles', ArticlePayloadValidate, createArticle);
route.put('/articles/:id', ArticlePayloadValidate, updateArticle);
route.delete('/articles/:id', deleteArticle);

module.exports = route;
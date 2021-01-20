const db = require("../models");
const Article = db.Article;
const { successMessage, status, errorMessage } = require("../helpers/status");

/**
 * Create Article
 * @param {object} req
 * @param {object} res
 * @returns {object} reflection object
 */
const createArticle = async (req, res) => {
  const { title, content, userId } = req.body;
  try {
    const article = await Article.create({
      title,
      content,
      userId
    });
    successMessage.success = "Article created";
    successMessage.data = article;
    return res.status(status["success"]).send(successMessage);
  } catch (error) {
    errorMessage.message = error.message;
    errorMessage.error = "article could not be created";
    return res.status(status["error"]).send(errorMessage);
  }
};

/**
 * Get all articles
 * @param {object} req
 * @param {object} res
 * @returns {array} Articles array
 */
const getAllArticles = async (req, res) => {};
/**
 * Get article by id
 * @param {object} req
 * @param {object} res
 * @returns {object} article object
 */
const getArticleById = async (req, res) => {};

/**
 * Update Article
 * @param {object} req
 * @param {object} res
 * @returns {void} article updated
 */
const updateArticle = async (req, res) => {
  const { id } = req.params;
  const { title, content, userId } = req.body;
  try {
    const updatedArticle = await Article.update(
      { title, content, userId },
      { where: { id } }
    );
    if (!updatedArticle[0]) {
      errorMessage.error = "Article does not exist";
      return res.status(status.notfound).send(errorMessage);
    }
    successMessage.data = "Article updated";
    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = `Article could not be updated: ${error.message}`;
    return res.status(status.error).send(errorMessage);
  }
};

/**
 * Delete Article
 * @param {object} req
 * @param {object} res
 * @returns {void} article deleted
 */
const deleteArticle = async (req, res) => {
  const { id } = req.params;
  try {
    const dbResponse = await Article.destroy({ where: { id } });
    if (!dbResponse) {
      errorMessage.error = "Article does not exist";
      return res.status(status.notfound).send(errorMessage);
    }
    successMessage.data = "Article deleted";
    return res.status(status.success).send(successMessage);
  } catch (error) {
    errorMessage.error = `Article could not be deleted: ${error.message}`;
    return res.status(status.error).send(errorMessage);
  }
};
module.exports = {
  createArticle,
  getAllArticles,
  getArticleById,
  updateArticle,
  deleteArticle
};

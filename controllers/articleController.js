const db = require("../models");
const Article = db.Article;
const { successMessage, status, errorMessage } = require("../helpers/status");

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

module.exports = {
  createArticle
};

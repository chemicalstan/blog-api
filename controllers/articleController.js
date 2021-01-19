
const db = require("../models")
const Article = db.Article;
const {
  empty,
  successMessage,
  status,
  errorMessage
} = require("../helpers/validations");

const createArticle = async (req, res) => {
  const { title, content, userId } = req.body;
  if (empty(title) || empty(content) || empty(userId)) {
      errorMessage.error = 'title, content and userid field must not be empty'
      return res.status(status['bad']).send(errorMessage);
  }

  try {
    const article = await Article.create({
      title,
      content,
      userId
    });
    successMessage.success = 'Article created';
    successMessage.data = article
    return res.status(status['success']).send(successMessage);
  } catch (error) {
    errorMessage.error = 'article could not be created';
    return res.status(status['error']).send(errorMessage)
  }

};

module.exports = {
  createArticle
};

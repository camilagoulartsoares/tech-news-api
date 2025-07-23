const news = require('../data/news')

function getAllNews(req, res) {
  res.json(news)
}

module.exports = { getAllNews }

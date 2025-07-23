const { db } = require('../db')

async function getAllNews(req, res) {
  await db.read()
  res.json(db.data.news)
}

async function getNewsById(req, res) {
  await db.read()
  const news = db.data.news.find((n) => n.id === req.params.id)
  if (!news) return res.status(404).json({ message: 'Notícia não encontrada' })
  res.json(news)
}

async function createNews(req, res) {
  await db.read()
  const newNews = req.body
  db.data.news.push(newNews)
  await db.write()
  res.status(201).json(newNews)
}

async function updateNews(req, res) {
  await db.read()
  const index = db.data.news.findIndex((n) => n.id === req.params.id)
  if (index === -1) return res.status(404).json({ message: 'Notícia não encontrada' })
  db.data.news[index] = req.body
  await db.write()
  res.json(db.data.news[index])
}

async function deleteNews(req, res) {
  await db.read()
  db.data.news = db.data.news.filter((n) => n.id !== req.params.id)
  await db.write()
  res.status(204).end()
}

module.exports = {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
}

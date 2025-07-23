const { db } = require('../db')

async function getAllNews(req, res) {
  await db.read()
  res.json(db.data.news)
}

async function getNewsById(req, res) {
  await db.read()
  const id = parseInt(req.params.id)
  const newsItem = db.data.news.find(item => item.id === id)

  if (!newsItem) {
    return res.status(404).json({ message: 'Notícia não encontrada' })
  }

  res.json(newsItem)
}

async function createNews(req, res) {
  const { title, content, date } = req.body

  if (!title || !content || !date) {
    return res.status(400).json({ message: 'Campos obrigatórios: title, content, date' })
  }

  await db.read()
  const newId = db.data.news.length > 0 ? db.data.news.at(-1).id + 1 : 1

  const newArticle = { id: newId, title, content, date }

  db.data.news.push(newArticle)
  await db.write()

  res.status(201).json(newArticle)
}

async function updateNews(req, res) {
  await db.read()
  const id = parseInt(req.params.id)
  const index = db.data.news.findIndex(item => item.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Notícia não encontrada' })
  }

  const { title, content, date } = req.body

  db.data.news[index] = {
    ...db.data.news[index],
    title: title || db.data.news[index].title,
    content: content || db.data.news[index].content,
    date: date || db.data.news[index].date
  }

  await db.write()
  res.json(db.data.news[index])
}

async function deleteNews(req, res) {
  await db.read()
  const id = parseInt(req.params.id)
  const index = db.data.news.findIndex(item => item.id === id)

  if (index === -1) {
    return res.status(404).json({ message: 'Notícia não encontrada' })
  }

  const removed = db.data.news.splice(index, 1)[0]
  await db.write()
  res.json({ message: 'Notícia removida', item: removed })
}

module.exports = {
  getAllNews,
  getNewsById,
  createNews,
  updateNews,
  deleteNews
}

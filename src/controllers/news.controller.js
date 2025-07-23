const { db } = require('../db')

exports.getAllNews = async (req, res) => {
  await db.read()
  const news = db.data.news || []
  res.json(news)
}

exports.getNewsById = async (req, res) => {
  await db.read()
  const newsItem = db.data.news.find(n => n.id === req.params.id)
  if (!newsItem) return res.status(404).json({ error: 'Not found' })
  res.json(newsItem)
}

exports.createNews = async (req, res) => {
  const newItem = { id: Date.now().toString(), ...req.body }
  await db.read()
  db.data.news.push(newItem)
  await db.write()
  res.status(201).json(newItem)
}

exports.updateNews = async (req, res) => {
  await db.read()
  const index = db.data.news.findIndex(n => n.id === req.params.id)
  if (index === -1) return res.status(404).json({ error: 'Not found' })

  db.data.news[index] = { ...db.data.news[index], ...req.body }
  await db.write()
  res.json(db.data.news[index])
}

exports.deleteNews = async (req, res) => {
  await db.read()
  const index = db.data.news.findIndex(n => n.id === req.params.id)
  if (index === -1) return res.status(404).json({ error: 'Not found' })

  const removed = db.data.news.splice(index, 1)
  await db.write()
  res.json(removed[0])
}

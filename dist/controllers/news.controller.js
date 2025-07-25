"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllNews = getAllNews;
exports.getNewsById = getNewsById;
exports.createNews = createNews;
exports.updateNews = updateNews;
exports.deleteNews = deleteNews;
const db_1 = require("../db");
async function getAllNews(req, res) {
    await db_1.db.read();
    res.json(db_1.db.data.news);
}
async function getNewsById(req, res) {
    await db_1.db.read();
    const news = db_1.db.data.news.find(n => n.id === req.params.id);
    if (!news)
        return res.status(404).json({ message: 'Notícia não encontrada' });
    res.json(news);
}
async function createNews(req, res) {
    await db_1.db.read();
    const newNews = req.body;
    db_1.db.data.news.push(newNews);
    await db_1.db.write();
    res.status(201).json(newNews);
}
async function updateNews(req, res) {
    await db_1.db.read();
    const index = db_1.db.data.news.findIndex(n => n.id === req.params.id);
    if (index === -1)
        return res.status(404).json({ message: 'Notícia não encontrada' });
    db_1.db.data.news[index] = req.body;
    await db_1.db.write();
    res.json(db_1.db.data.news[index]);
}
async function deleteNews(req, res) {
    await db_1.db.read();
    db_1.db.data.news = db_1.db.data.news.filter(n => n.id !== req.params.id);
    await db_1.db.write();
    res.status(204).end();
}

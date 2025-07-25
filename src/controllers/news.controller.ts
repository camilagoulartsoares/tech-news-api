import { Request, Response } from 'express';
import { db, News } from '../db';

export async function getAllNews(req: Request, res: Response) {
  await db.read();
  res.json(db.data!.news);
}

export async function getNewsById(req: Request, res: Response) {
  await db.read();
  const news = db.data!.news.find(n => n.id === req.params.id);
  if (!news) return res.status(404).json({ message: 'Notícia não encontrada' });
  res.json(news);
}

export async function createNews(req: Request, res: Response) {
  await db.read();
  const newNews: News = req.body;
  db.data!.news.push(newNews);
  await db.write();
  res.status(201).json(newNews);
}

export async function updateNews(req: Request, res: Response) {
  await db.read();
  const index = db.data!.news.findIndex(n => n.id === req.params.id);
  if (index === -1) return res.status(404).json({ message: 'Notícia não encontrada' });
  db.data!.news[index] = req.body;
  await db.write();
  res.json(db.data!.news[index]);
}

export async function deleteNews(req: Request, res: Response) {
  await db.read();
  db.data!.news = db.data!.news.filter(n => n.id !== req.params.id);
  await db.write();
  res.status(204).end();
}

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { v4 as uuid } from 'uuid';
import { seedNews } from './data/news';

export interface News {
  id: string;
  title: string;
  content: string;
  date: string;
}

export interface DataSchema {
  news: News[];
}

const file = new JSONFile<DataSchema>('db.json');
export const db = new Low<DataSchema>(file, { news: [] });

export async function initDB() {
  await db.read();
  db.data ||= { news: [] };

  const isEmpty = db.data.news.length === 0;

  if (isEmpty) {
    const seeded = seedNews.map((n) => ({
      ...n,
      id: uuid()
    }));
    db.data.news.push(...seeded);
    await db.write();
    console.log(`✅ Banco estava vazio. Populado com ${seeded.length} notícias iniciais.`);
  } else {
    console.log(`✅ Banco já contém ${db.data.news.length} notícias. Nenhuma foi sobrescrita.`);
  }
}

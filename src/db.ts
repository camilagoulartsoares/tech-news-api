import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

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
  await db.write();
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.db = void 0;
exports.initDB = initDB;
const lowdb_1 = require("lowdb");
const node_1 = require("lowdb/node");
const uuid_1 = require("uuid");
const news_1 = require("./data/news");
const file = new node_1.JSONFile('db.json');
exports.db = new lowdb_1.Low(file, { news: [] });
async function initDB() {
    await exports.db.read();
    exports.db.data || (exports.db.data = { news: [] });
    const isEmpty = exports.db.data.news.length === 0;
    if (isEmpty) {
        const seeded = news_1.seedNews.map((n) => ({
            ...n,
            id: (0, uuid_1.v4)()
        }));
        exports.db.data.news.push(...seeded);
        await exports.db.write();
        console.log(`✅ Banco estava vazio. Populado com ${seeded.length} notícias iniciais.`);
    }
    else {
        console.log(`✅ Banco já contém ${exports.db.data.news.length} notícias. Nenhuma foi sobrescrita.`);
    }
}

const { Low } = require('lowdb')
const { JSONFile } = require('lowdb/node')

const file = new JSONFile('db.json')
const defaultData = { news: [] }
const db = new Low(file, defaultData)

async function initDB() {
  await db.read()
  db.data ||= defaultData
  await db.write()
}

module.exports = { db, initDB }

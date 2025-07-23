const express = require('express')
const cors = require('cors')
const newsRoutes = require('./routes/news.routes')

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/news', newsRoutes)

app.get('/', (req, res) => {
  res.send('API online!');
});

module.exports = app

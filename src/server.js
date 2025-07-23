const app = require('./app')
const { initDB } = require('./db')

const PORT = process.env.PORT || 3000

initDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`)
  })
})

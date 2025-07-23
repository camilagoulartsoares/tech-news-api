# Tech News API 📰

Uma API REST simples para gerenciamento de notícias de tecnologia.

## 🚀 Tecnologias usadas

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [LowDB](https://github.com/typicode/lowdb)
- [Nodemon](https://www.npmjs.com/package/nodemon)
- [REST Client (VSCode)](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)

## 📁 Endpoints disponíveis

| Método | Rota                     | Descrição                      |
|--------|--------------------------|--------------------------------|
| GET    | `/api/news`             | Lista todas as notícias        |
| GET    | `/api/news/:id`         | Retorna uma notícia específica |
| POST   | `/api/news`             | Cria uma nova notícia          |
| PUT    | `/api/news/:id`         | Atualiza uma notícia existente |
| DELETE | `/api/news/:id`         | Remove uma notícia             |

## 📄 Estrutura esperada no POST

```json
{
  "title": "Título da notícia",
  "content": "Conteúdo completo",
  "date": "YYYY-MM

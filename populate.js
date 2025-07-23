const axios = require('axios');

const BASE_URL = 'https://tech-news-api-nlji.onrender.com/api/news'

const newsList = [
  {
    title: 'Notícia A',
    content: 'Teste de múltiplos envios',
    date: '2025-07-24'
  },
  {
    title: 'Notícia B',
    content: 'Verificando se serão salvas juntas',
    date: '2025-07-24'
  }
];

async function populateNews() {
  try {
    for (const news of newsList) {
      const res = await axios.post(BASE_URL, news);
      console.log(`✅ Criada: ${res.data.title}`);
    }
  } catch (error) {
    console.error('Erro ao popular:', error.response?.data || error.message);
  }
}

populateNews();

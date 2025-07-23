const axios = require('axios');

const BASE_URL = 'https://tech-news-api-nlji.onrender.com/api/news';

const newsList = [
  {
    title: 'OpenAI anuncia novo modelo GPT-5',
    content: 'A OpenAI revelou planos para o lançamento do GPT-5, prometendo avanços significativos em raciocínio, memória de longo prazo e segurança.',
    date: '2025-07-23'
  },
  {
    title: 'Microsoft lança Windows 12 com IA integrada',
    content: 'A nova versão do sistema operacional traz copilotos com inteligência artificial em todo o sistema, melhorando produtividade e acessibilidade.',
    date: '2025-07-22'
  },
  {
    title: 'Google apresenta nova versão do Android 15',
    content: 'O Android 15 chega com melhorias em privacidade, desempenho e novas APIs focadas em apps de IA generativa.',
    date: '2025-07-20'
  },
  {
    title: 'NVIDIA bate recorde de valor de mercado',
    content: 'Com a crescente demanda por chips de IA, a NVIDIA ultrapassa marcas históricas e se consolida como uma das empresas mais valiosas do mundo.',
    date: '2025-07-19'
  },
  {
    title: 'Meta libera versão open source do Llama 3',
    content: 'A Meta lançou o modelo de linguagem Llama 3 gratuitamente, com foco em aplicações seguras de IA em código aberto.',
    date: '2025-07-18'
  }
];

async function populateNews() {
  try {
    for (const news of newsList) {
      const res = await axios.post(BASE_URL, news);
      console.log(`✅ Criada: ${res.data.title}`);
    }
  } catch (error) {
    console.error('❌ Erro ao popular:', error.response?.data || error.message);
  }
}

populateNews();

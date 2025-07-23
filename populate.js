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
    title: 'Apple apresenta novo chip M4 para Macs',
    content: 'Durante o WWDC 2025, a Apple revelou o chip M4 com foco em desempenho gráfico e otimizações para inteligência artificial.',
    date: '2025-07-17'
  },
  {
    title: 'Samsung revela Galaxy Z Fold 7 com bateria aprimorada',
    content: 'A nova geração do dobrável da Samsung traz melhorias de bateria, nova dobradiça e suporte expandido para apps com IA.',
    date: '2025-07-15'
  },
  {
    title: 'Amazon lança robô doméstico com Alexa integrada',
    content: 'Chamado Astro 2, o novo robô inteligente da Amazon traz funções de segurança, assistência e integração total com casa conectada.',
    date: '2025-07-14'
  },
  {
    title: 'TikTok implementa sistema de IA para moderação em tempo real',
    content: 'Com foco em segurança digital, o TikTok agora usa IA generativa para identificar e moderar conteúdo impróprio mais rapidamente.',
    date: '2025-07-13'
  },
  {
    title: 'Intel divulga roadmap com chips de 1.8nm até 2027',
    content: 'A Intel revelou sua próxima geração de chips, prometendo avanços em consumo energético e desempenho para datacenters e PCs.',
    date: '2025-07-12'
  },
  {
    title: 'NVIDIA ultrapassa Apple em valor de mercado',
    content: 'A NVIDIA se tornou a segunda empresa mais valiosa do mundo, impulsionada pela alta demanda por GPUs de IA.',
    date: '2025-07-11'
  },
  {
    title: 'Meta anuncia óculos de realidade mista com IA nativa',
    content: 'A Meta revelou um novo dispositivo que combina RA com assistente pessoal baseado em IA, capaz de interagir com o ambiente.',
    date: '2025-07-10'
  },
  {
    title: 'Google testa nova IA para diagnósticos médicos',
    content: 'O Google Health iniciou testes com uma IA voltada para diagnósticos clínicos em hospitais nos EUA e Reino Unido.',
    date: '2025-07-09'
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

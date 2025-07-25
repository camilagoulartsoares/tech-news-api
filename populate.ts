import axios from 'axios';
import { News } from './src/db';

const BASE_URL = 'https://tech-news-api-nlji.onrender.com/api/news';

const newsList: Omit<News, 'id'>[] = [
  {
    title: 'OpenAI lança GPT-5 com foco em raciocínio avançado',
    content: 'A OpenAI anunciou o GPT-5, com melhorias em raciocínio lógico, memória de longo prazo e segurança no uso corporativo.',
    date: '2025-07-23'
  },
  {
    title: 'Windows 12 é lançado com IA integrada',
    content: 'A Microsoft apresentou o Windows 12 com copilotos de IA nativos, otimizando tarefas do dia a dia.',
    date: '2025-07-22'
  },
  {
    title: 'Tesla revela robô doméstico com IA embarcada',
    content: 'A Tesla mostrou o novo protótipo de robô doméstico com IA capaz de executar tarefas simples e se comunicar com humanos.',
    date: '2025-07-21'
  },
  {
    title: 'Meta anuncia Ray-Ban com câmera e assistente de voz',
    content: 'Os novos óculos inteligentes da Meta terão microfone e conexão com IA para comandos de voz em tempo real.',
    date: '2025-07-20'
  },
  {
    title: 'Google lança Bard 3.0 com integração ao Android',
    content: 'O Google atualizou o Bard com suporte ao Android 15 e respostas mais precisas para o dia a dia.',
    date: '2025-07-19'
  },
  {
    title: 'Apple revela iPhone 16 com chip Neural A18',
    content: 'O novo iPhone 16 traz maior foco em inteligência artificial no processamento local e integração com apps nativos.',
    date: '2025-07-18'
  },
  {
    title: 'Amazon testa entregas por drone em tempo recorde',
    content: 'Amazon expande os testes de entrega por drone, prometendo encomendas em menos de 30 minutos em áreas urbanas.',
    date: '2025-07-17'
  },
  {
    title: 'Samsung Galaxy Z Fold 6 chega ao Brasil',
    content: 'A nova geração do dobrável da Samsung traz resistência aprimorada, novas câmeras e integração com IA generativa.',
    date: '2025-07-16'
  },
  {
    title: 'Intel anuncia nova linha de processadores AI Boost',
    content: 'A Intel apresentou processadores otimizados para cargas de trabalho de IA, voltados para notebooks e servidores.',
    date: '2025-07-15'
  },
  {
    title: 'TikTok lança ferramenta de edição com IA generativa',
    content: 'Usuários poderão gerar efeitos visuais e editar vídeos usando prompts de texto, com tecnologia de geração de imagens.',
    date: '2025-07-14'
  },
  {
    title: 'YouTube testa busca por voz com IA dentro dos vídeos',
    content: 'Novo recurso permite encontrar trechos de vídeos com base em perguntas faladas, usando reconhecimento inteligente.',
    date: '2025-07-13'
  },
  {
    title: 'NVIDIA ultrapassa Apple e se torna a segunda maior empresa do mundo',
    content: 'Com a alta demanda por chips de IA, a NVIDIA alcançou a vice-liderança em valor de mercado global.',
    date: '2025-07-12'
  },
  {
    title: 'Spotify lança playlist diária gerada por IA',
    content: 'Novo recurso oferece recomendações musicais personalizadas com base no humor e contexto do usuário.',
    date: '2025-07-11'
  },
  {
    title: 'LinkedIn terá assistente de IA para escrita de posts',
    content: 'A plataforma começa a testar um gerador de conteúdo para ajudar profissionais a criarem posts mais engajadores.',
    date: '2025-07-10'
  },
  {
    title: 'Instagram testa recurso de Stories com realidade aumentada',
    content: 'Novos efeitos de RA permitirão interações mais imersivas nos Stories, usando reconhecimento facial e de ambiente.',
    date: '2025-07-09'
  }
];

async function populateNews() {
  try {
    for (const news of newsList) {
      const res = await axios.post(BASE_URL, news);
      console.log(`✅ Criada: ${res.data.title}`);
    }
  } catch (error: any) {
    console.error('❌ Erro ao popular:', error.response?.data || error.message);
  }
}

populateNews();

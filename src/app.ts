import express from 'express';
import cors from 'cors';
import newsRoutes from './routes/news.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/news', newsRoutes);

app.get('/', (req, res) => {
  res.send('API online!');
});

export default app;

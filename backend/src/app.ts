import express from 'express';
import cors from 'cors';
import counterRoutes from './routes/counterRoutes';
import { pool } from './database';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/', counterRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

pool.connect()
    .then(() => console.log('PostgreSQL connected'))
    .catch(err => console.error(err));
    
app.get('/users', async (req, res) => {
  const result = await pool.query('SELECT * FROM users');
  res.json(result.rows);
});
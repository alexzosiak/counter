import express from 'express';
import cors from 'cors';
import counterRoutes from './routes/counterRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/', counterRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});



import express from 'express';
import cors from 'cors';
import {readDB, writeDB} from './ssd.ts';


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

let counter = 105;


app.get('/counter', (req, res) => {
    res.json({ value: counter });
});

app.post('/counter', (req, res) => {
    const { value } = req.body;

    if (typeof value !== 'number') {
        return res.status(400).json({ error: 'Value must be a number' });
    }

    counter = value;

    res.json({
        message: 'Counter updated',
        value: counter,
    });
});

app.post("/init", (req, res) => {
  const db = readDB();
  const id = Math.random().toString(36).substring(2, 10);

  db[id] = { count: 0 };
  writeDB(db);

  res.json({ id, count: 0 });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

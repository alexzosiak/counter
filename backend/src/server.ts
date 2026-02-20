import express from 'express';
import cors from 'cors';
import { readDB, writeDB } from './ssd.ts';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get('/counter/:id', (req, res) => {
    const db = readDB();
    const user = db[req.params.id];
    
    if (!user) {
        return res.status(404).json({ error: 'Not found' });
    }

    res.json(user);
});

app.post('/counter/:id', (req, res) => {
    const db = readDB();
    const user = db[req.params.id];

    if (!user) {
        return res.status(404).json({ error: 'Not found' });
    }

    const { value } = req.body;
    user.count = value;
    writeDB(db);

    res.json(user);
});


app.post('/init', (req, res) => {
    const db = readDB();
    const id = Math.random().toString(36).substring(2, 10);

    db[id] = { count: 0 };
    writeDB(db);

    res.json({ id, count: 0 });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

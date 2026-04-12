import postgresql from 'pg';
const { Pool } = postgresql;

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'counter_database',
    password: 'admin',
    port: 5432,
});

export const getUser = async (id: string) => {
    const result = await pool.query('SELECT * FROM users WHERE id = $1', [id]);
    console.log(result);
    return result.rows[0];
};

export const updateCounter = async (id: string, value: number) => {
    const result = await pool.query(`UPDATE users SET count = $1 WHERE id = $2 RETURNING *`, [value, id])
    return result.rows[0];
};


export const initUser = async (id: string, count: number) => {
    const result = await pool.query(
        `INSERT INTO users (id, count) VALUES ($1, $2) RETURNING *`,
        [id, count]
    );
    return result.rows[0];
};

export const addSave = async (id: string, saveId: string, value: number, time: Date) => {
    const result = await pool.query('INSERT INTO saves (id, group_id, value, timestamp) VALUES ($1, $2, $3, $4) RETURNING *', 
        [saveId, id, value, time]);
    return result.rows[0];
};

export const getUserSave = async (saveId: string) => {
    const result = await pool.query('SELECT * FROM saves WHERE group_id = $1 ORDER BY timestamp DESC',
    [saveId]);
    return result.rows;
}

// export const deleteSave = (idUser: string, idSave: string) => {
//     const db = readDB();
//     const user = db[idUser];
//     if (!user) throw new Error('User not found');

//     user.save = user.save.filter(item => item.id !== idSave);
//     writeDB(db);
// };
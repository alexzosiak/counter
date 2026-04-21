import pg from 'pg';

const { Pool } = pg;

export const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'counter_test_db',
  password: 'admin',
  port: 5432,
});





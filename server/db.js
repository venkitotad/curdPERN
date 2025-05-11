import {Pool} from 'pg';

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'perntodo',
  password: 'Venki@6363',
  port: 5432,
});

export default pool;

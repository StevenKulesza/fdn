import pg from "pg"
const { Client, Pool } = pg
import { DB_USER, DB_HOST, DB_PASS, DB_DATABASE, DB_PORT } from '../constants.js'

const client = new Client()
client.connect()

export const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASS,
    database: DB_DATABASE,
    port: DB_PORT,
})
  
await pool.query(`
  CREATE TABLE IF NOT EXISTS ens (
    ID SERIAL PRIMARY KEY NOT NULL UNIQUE,
    ENS_ID VARCHAR(255) NOT NULL UNIQUE,
    NAME VARCHAR(255) NOT NULL UNIQUE,
    ADDRESS VARCHAR(42) NOT NULL
  );
`)
import pg from "pg"
const { Client, Pool } = pg
import { DB_USER, DB_HOST, DB_PASS, DB_DATABASE, DB_PORT } from '../constants.js'
import { createEnsTable } from "./queries.js"

const client = new Client()
client.connect()

export const pool = new Pool({
    user: DB_USER,
    host: DB_HOST,
    password: DB_PASS,
    database: DB_DATABASE,
    port: DB_PORT,
})
  
// create the initial table if it does not exist
await pool.query(createEnsTable)
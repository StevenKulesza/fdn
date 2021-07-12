import dotenv from 'dotenv'
dotenv.config()

export const DB_USER = process.env.DB_USER
export const DB_HOST = process.env.DB_HOST
export const DB_PASS = process.env.DB_PASS
export const DB_DATABASE = process.env.DB_DATABASE
export const DB_PORT = process.env.DB_PORT
export const PORT = process.env.PORT
export const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID
export const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN
export const TWILIO_FROM_NUMBER = process.env.TWILIO_FROM_NUMBER
export const TWILIO_TO_NUMBER = process.env.TWILIO_TO_NUMBER
export const SUBGRAPH_URL = process.env.SUBGRAPH_URL
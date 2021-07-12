export const createEnsTable = `
CREATE TABLE IF NOT EXISTS ens (
  ID SERIAL PRIMARY KEY NOT NULL UNIQUE,
  ENS_ID VARCHAR(255) NOT NULL UNIQUE,
  NAME VARCHAR(255) NOT NULL UNIQUE,
  ADDRESS VARCHAR(42) NOT NULL
);
`

export const insertEnsTable = 'INSERT INTO ens (ENS_ID, NAME, ADDRESS) VALUES %L ON CONFLICT DO NOTHING RETURNING *'
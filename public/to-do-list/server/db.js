import pkg from 'pg';
const { Client } = pkg;

export const db = new Client ({
    host: "localhost",
    database: "to-do-list",
    user: "postgres",
    password: "laboratory",
    port: 5432,
});

db.connect()
    .then(() => console.log( 'Connected to postgresSQL'))
    .catch(err => console.error('Connected error' , err.stack));
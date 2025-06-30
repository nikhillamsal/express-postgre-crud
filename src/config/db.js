// import pkg from 'pg';
import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_DBPORT,
});
// pool.connect()
pool.on("connect",()=>{
    console.log("Connected to the database");
});


// (async () => {
//     try {
//         const client = await pool.connect();
//         console.log("Client successfully connected");
//         client.release();
//     } catch (err) {
//         console.error("Connection error", err);
//     }
// })();


export default pool;
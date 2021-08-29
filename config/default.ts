import * as dotenv from 'dotenv';
dotenv.config();

export default {
    port: process.env.PORT,
    host: process.env.DB_HOST,
    dbUrl: process.env.DB_URL
}
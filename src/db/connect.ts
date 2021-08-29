import mongoose from "mongoose";
import config from "config";
import log from '../logger';
import { load } from "dotenv";

async function connect() {
    mongoose.connect(config.get('dbUrl'))
        .then(() => log.info('Database connected...'))
        .catch(err => log.error(err));
}

export default connect;
import mongoose from 'mongoose'
import config from './config';

mongoose.set('strictQuery', false);

(async() => {
    const db = await mongoose.connect(config.mongodbURL);
     console.log('Database Name:', db.connection.name)
})();


import App from './app';
import Database from './database/database-connection';
import dotenv from 'dotenv';
import 'core-js/stable';
import 'regenerator-runtime/runtime';

dotenv.config();

const port = process.env.PORT || 3000;
const connectionString = process.env.CONNECTION_STRING;

if (!connectionString) {
    throw "No connection string setting in environment variables";
}

import UrlRouter from './routes/url.router';

const app = new App(port, [ UrlRouter ]);
const db = new Database(connectionString);

db.connect().then(() => {
    console.log(`Successfully connected to database`);
    app.listen().then(() => console.log(`App started in port ${port}`));

}).catch(error => {
    console.log(error);
});
import mongoose from 'mongoose';

const connectionString = process.env.CONNECTION_STRING;

mongoose.connect(connectionString);
mongoose.Promise = global.Promise;
const database = mongoose.connection;

database.on('error', console.error.bind(console, 'MongoDB connection error:'))

export default database;

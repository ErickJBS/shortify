import mongoose from 'mongoose';

class DatabaseConnection {
    connectionString;

    constructor(connectionString) {
        mongoose.Promise = global.Promise;
        this.connectionString = connectionString;
        
        const database = mongoose.connection;
        database.on('error', console.error.bind(console, 'MongoDB connection error:'))
    }

    connect() {
        return mongoose.connect(this.connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    }
}

export default DatabaseConnection;
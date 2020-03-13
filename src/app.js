import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

class App {

    app;
    port;

    constructor(port, routes) {
        this.app = express();
        this.port = port;

        this.app.use(express.static(path.join(__dirname, 'public')));

        this.initializeMiddlewares();
        this.initializeRoutes(routes);
    }

    listen() {
        return new Promise((resolve, reject) => {
            this.app.listen(this.port, () => {
                resolve();
            }).on('error', (error) => {
                reject(error);
            })
        })
    }

    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(cors());
    }

    initializeRoutes(routes) {
        routes.forEach((route) => {
            this.app.use('/', route);
        });
    }
}

export default App;
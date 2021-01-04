import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import defalutRoutes from './routes/defaultRoutes';
import userRoutes from './routes/userRoutes';
class Server{

    app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void{
        this.app.set('port', process.env.port || 3000)
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    private routes(): void{
        this.app.use('/', defalutRoutes);
        this.app.use('/api/users', userRoutes);
    }

    public start(): void{
        this.app.listen(this.app.get('port'), () => {
            console.log("Server init in port "+this.app.get('port'))
        });
    }
}

const server = new Server();
server.start();
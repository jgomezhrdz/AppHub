import express, { Router } from 'express';
import userController from '../controllers/userController';


class userRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', userController.list);
        this.router.get('/email', userController.getOne);
        this.router.get('/login', userController.login);   
        this.router.post('/', userController.create);
        this.router.put('/email', userController.update);
        this.router.delete('/email', userController.delete);
    }

}

export default new userRoutes().router;

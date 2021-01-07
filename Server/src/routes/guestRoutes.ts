import express, { Router } from 'express';
import guestController from '../controllers/guestController';


class guestRoutes {

    router: Router = Router();

    constructor() {
        this.config();
    }

    config() {
        this.router.get('/', guestController.list);
        this.router.get('/:username', guestController.getOne);
        this.router.post('/', guestController.create);
        this.router.put('/:username', guestController.update);
        this.router.delete('/:username', guestController.delete);
    }

}

export default new guestRoutes().router;

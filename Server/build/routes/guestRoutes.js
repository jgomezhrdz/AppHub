"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const guestController_1 = __importDefault(require("../controllers/guestController"));
class guestRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', guestController_1.default.list);
        this.router.get('/login', guestController_1.default.login);
        this.router.get('/username', guestController_1.default.getOne);
        this.router.post('/', guestController_1.default.create);
        this.router.put('/username', guestController_1.default.update);
        this.router.delete('/username', guestController_1.default.delete);
    }
}
exports.default = new guestRoutes().router;

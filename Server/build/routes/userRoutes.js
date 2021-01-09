"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = __importDefault(require("../controllers/userController"));
class userRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', userController_1.default.list);
        this.router.get('/email', userController_1.default.getOne);
        this.router.get('/exists', userController_1.default.exists);
        this.router.get('/login', userController_1.default.login);
        this.router.post('/', userController_1.default.create);
        this.router.put('/email', userController_1.default.update);
        this.router.delete('/email', userController_1.default.delete);
    }
}
exports.default = new userRoutes().router;

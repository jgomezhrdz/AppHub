"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const defaultRoutes_1 = __importDefault(require("./routes/defaultRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const guestRoutes_1 = __importDefault(require("./routes/guestRoutes"));
class Server {
    //---
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.port || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', defaultRoutes_1.default);
        this.app.use('/api/users', userRoutes_1.default);
        this.app.use('/api/guests', guestRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log("Server init in port " + this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();

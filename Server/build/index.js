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
        this.app.use(cors_1.default({ origin: 'http://localhost:4200' }));
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/', defaultRoutes_1.default);
        this.app.use('/api/users', userRoutes_1.default);
        this.app.use('/api/guests', guestRoutes_1.default);
    }
    start() {
        const express = require('express');
        const cors = require('cors');
        const app = express();
        const youtubedl = require('youtube-dl');
        const fs = require('fs');
        this.app.listen(this.app.get('port'), () => {
            console.log("Server init in port " + this.app.get('port'));
        });
        this.app.get('/download/video', (req, res) => {
            var URL = req.query.url;
            var title = req.query.title;
            var videooutput = '../AppHub/src/assets/videos/' + title + ".mp4";
            const video = youtubedl(URL, ['--format=18'], { cwd: __dirname });
            video.pipe(fs.createWriteStream(videooutput));
            video.on('end', function () {
                res.json({ "res": "OK" });
            });
            video.on("error", function (err) {
                console.error(err);
                res.json({ "res": "ERR" });
            });
        });
        this.app.get('/download/music', (req, res) => {
            var URL = req.query.url;
            var title = req.query.title;
            var videooutput = '../AppHub/src/assets/musica/' + title + ".mp3";
            console.log(title);
            const video = youtubedl(URL, ['--format=18'], { cwd: __dirname });
            video.pipe(fs.createWriteStream(videooutput));
            video.on('end', function () {
                res.json({ "res": "OK" });
            });
            video.on("error", function (err) {
                console.error(err);
                res.json({ "res": "ERR" });
            });
        });
    }
}
const server = new Server();
server.start();

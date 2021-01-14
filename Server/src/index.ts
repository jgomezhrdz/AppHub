import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

import defalutRoutes from './routes/defaultRoutes';
import userRoutes from './routes/userRoutes';
import guestRoutes from './routes/guestRoutes';



class Server{

    app: express.Application;
//---
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    private config(): void{
        this.app.set('port', process.env.port || 3000)
        this.app.use(morgan('dev'));
        this.app.use(cors({origin: 'http://localhost:4200'}));        
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    private routes(): void{
        this.app.use('/', defalutRoutes);
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/guests', guestRoutes);
    }

    public start(): void{
        const express = require('express');
        const cors = require('cors');
        const app = express();

        const youtubedl = require('youtube-dl')
        const fs = require('fs')

        this.app.listen(this.app.get('port'), () => {
            console.log("Server init in port "+this.app.get('port'))
        });

        this.app.get('/download/video', (req,res) => {
            var URL = req.query.url;
            var title = req.query.title;
            var videooutput = '../AppHub/src/assets/videos/'+title+".mp4";
            const video = youtubedl(URL, ['--format=18'], { cwd: __dirname })
            video.pipe(fs.createWriteStream(videooutput))
            video.on('end', function() {      
              res.json({"res": "OK"})
              });
            video.on("error", function (err: any) {
                console.error(err);
                res.json({"res":"ERR"})
              });
        })
        
        this.app.get('/download/music', (req,res) => {
            var URL = req.query.url;
            var title = req.query.title;
            var videooutput = '../AppHub/src/assets/musica/'+title+".mp3";
            console.log(title)
            const video = youtubedl(URL, ['--format=18'], { cwd: __dirname })
            video.pipe(fs.createWriteStream(videooutput))
            video.on('end', function() {    
              res.json({"res": "OK"})
              });
            video.on("error", function (err: any) {
                console.error(err);
                res.json({"res":"ERR"})
              });
        })
    }
}

const server = new Server();

server.start();
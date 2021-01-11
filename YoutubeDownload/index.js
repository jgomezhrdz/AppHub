const express = require('express');
const cors = require('cors');
const app = express();

const youtubedl = require('youtube-dl')
const ytdl = require('ytdl-core');
const fs = require('fs')

 
app.use(cors());
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});


app.get('/download/video', (req,res) => {
    var URL = req.query.url;
    var title = req.query.title;
    var videooutput = '../AppHub/src/assets/videos/'+title+".mp4";
    const video = youtubedl(URL, ['--format=18'], { cwd: __dirname })
    video.pipe(fs.createWriteStream(videooutput))
    video.on('end', function() {      
      res.json("res: Video descargado")
      });
    video.on("error", function (err) {
        console.error(err);
        res.json("res: Video no descargado")
      });
})

app.get('/download/music', (req,res) => {
    var URL = req.query.url;
    var title = req.query.title;
    var videooutput = '../AppHub/src/assets/musica/'+title+".mp3";
    console.log(title)
    const video = youtubedl(URL, ['--format=18'], { cwd: __dirname })
    video.pipe(fs.createWriteStream(videooutput))
    video.on('end', function() {    
      console.log("Archivo descargado")  
      res.json("res: Audio descargado")
      });
    video.on("error", function (err) {
        console.error(err);
        res.json("res: Audio no descargado")
      });
})


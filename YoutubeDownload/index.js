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
    let downloaded = 0
    if (fs.existsSync(videooutput)) {
      downloaded = fs.statSync(videooutput).size
    }
    const video = youtubedl(URL, ['--format=18'], { start: downloaded, cwd: __dirname })
    video.on('info', function(info) {
      console.log('Download started')
      console.log('filename: ' + info._filename)
      let total = info.size + downloaded
      console.log('size: ' + total)
      if (downloaded > 0) {
        console.log('resuming from: ' + downloaded)
        console.log('remaining bytes: ' + info.size)
      }
    })
    var videooutput = '../AppHub/src/assets/videos/'+title+".mp4";
    video.pipe(fs.createWriteStream(videooutput, { flags: 'a' }))
    res.json("res: Video descargado");
})

app.get('/download/music', (req,res) => {
    var URL = req.query.url;
    var title = req.query.title;
    let downloaded = 0
    if (fs.existsSync(videooutput)) {
      downloaded = fs.statSync(videooutput).size
    }
    const video = youtubedl(URL, ['--format=18'], { start: downloaded, cwd: __dirname })
    video.on('info', function(info) {
      console.log('Download started')
      console.log('filename: ' + info._filename)
      let total = info.size + downloaded
      console.log('size: ' + total)
      if (downloaded > 0) {
        console.log('resuming from: ' + downloaded)
        console.log('remaining bytes: ' + info.size)
      }
    })
    var videooutput = '../AppHub/src/assets/musica/'+title+".mp3";
    video.pipe(fs.createWriteStream(videooutput, { flags: 'a' }))
    res.json("res: Video descargado");
})


const express = require('express');
const cors = require('cors');
const app = express();

var YoutubeMp3Downloader = require("youtube-mp3-downloader");
const youtubedl = require('youtube-dl')
const fs = require('fs')

var title = ""
var output = '../AppHub/src/assets/'+title;

var yd = new YoutubeMp3Downloader({
    "ffmpegPath": "/path/to/ffmpeg",        // FFmpeg binary location
    "outputPath": "/path/to/mp3/folder",    // Output file location (default: the home directory)
    "youtubeVideoQuality": "highestaudio",  // Desired video quality (default: highestaudio)
    "queueParallelism": 2,                  // Download parallelism (default: 1)
    "progressTimeout": 2000,                // Interval in ms for the progress reports (default: 1000)
    "allowWebm": false                      // Enable download from WebM sources (default: false)
});
 
app.use(cors());
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});


app.get('/download/video', (req,res) => {
    var URL = req.query.URL;
    this.title = req.query.title;
    let downloaded = 0
    if (fs.existsSync(output)) {
      downloaded = fs.statSync(output).size
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
    video.pipe(fs.createWriteStream(output, { flags: 'a' }))
    res.json("res: Video descargado");
})

app.get('/download/music', (req,res) => {
    var URL = req.query.URL;
    this.title = req.query.title;
    let downloaded = 0
    if (fs.existsSync(output)) {
      downloaded = fs.statSync(output).size
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
    video.pipe(fs.createWriteStream(output, { flags: 'a' }))
    res.json("res: Video descargado");
})


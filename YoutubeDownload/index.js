const express = require('express');
const cors = require('cors');
const app = express();

const youtubedl = require('youtube-dl')
const fs = require('fs')
const output = '../AppHub/src/assets/myvideo.mp4'
 
app.use(cors());
app.listen(4000, () => {
    console.log('Server Works !!! At port 4000');
});


app.get('/download', (req,res) => {
    var URL = req.query.URL;
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


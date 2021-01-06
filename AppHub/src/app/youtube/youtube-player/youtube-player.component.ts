import { Component, OnInit } from '@angular/core';
import { VideoYoutube } from '../video';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  video !: VideoYoutube
  constructor(private yt: YoutubeService) { }

  ngOnInit() {
    this.video = JSON.parse(sessionStorage.getItem('Video') as string) as VideoYoutube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  downloadVideo(){
    this.yt.downloadVideo(this.video, this.video.title);
  }
}

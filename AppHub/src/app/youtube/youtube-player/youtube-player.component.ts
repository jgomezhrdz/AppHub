import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { YoutubeService } from '../youtube.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  videoId !: string
  constructor(private yt: YoutubeService) { }

  ngOnInit() {
    this.videoId = sessionStorage.getItem('VideoId') as string;
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  downloadVideo(){
    this.videoId = sessionStorage.getItem('VideoUrl') as string;
    this.yt.downloadVideo(this.videoId);
  }
}

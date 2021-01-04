import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {

  videoId !: string
  constructor() { }

  ngOnInit() {
    this.videoId = sessionStorage.getItem('VideoId') as string;
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

}

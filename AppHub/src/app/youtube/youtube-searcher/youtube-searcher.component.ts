import { KeyedWrite } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { YoutubeService } from '../youtube.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-youtube-searcher',
  templateUrl: './youtube-searcher.component.html',
  styleUrls: ['./youtube-searcher.component.css']
})
export class YoutubeSearcherComponent {
  keyword !: string;
  videos : Video[] = [];

  constructor(private youtube: YoutubeService, private router: Router) {
   }

  watchVideo(video: Video){
    sessionStorage.setItem("VideoId", video.videoId)
    this.router.navigateByUrl('/YoutubePlayer');
  }
  getVideosList(): void {
    this.youtube.getVideos(this.keyword).subscribe(
      (data) => {
        console.log(data.items)
        this.videos = data.items.map((item: any) => {
          let video = new Video(
            item.id.videoId,
            'https://www.youtube.com/watch?v=${'+item.id.videoId+'}',
            item.snippet.channelId,
            'https://www.youtube.com/channel/${'+item.snippet.channelId+'}',
            item.snippet.channelTitle,
            item.snippet.title,
            new Date(item.snippet.publishedAt),
            item.snippet.description,
            item.snippet.thumbnails.high.url
          )
          return video
        })
    }) 
  }

}

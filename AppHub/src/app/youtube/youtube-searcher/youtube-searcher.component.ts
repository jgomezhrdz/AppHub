import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../youtubeService.service';

@Component({
  selector: 'app-youtube-searcher',
  templateUrl: './youtube-searcher.component.html',
  styleUrls: ['./youtube-searcher.component.css']
})
export class YoutubeSearcherComponent {
  keyword !: string;
  constructor(private youtube: YoutubeService) { }

  getVideosList(): void {
    this.youtube.getVideos(this.keyword).subscribe((data) => 
    console.log(data));
  }

}

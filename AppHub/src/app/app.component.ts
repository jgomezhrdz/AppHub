import { Component } from '@angular/core';
import {YoutubeService} from '../app/youtube/youtube.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppHub';
  constructor(private yt : YoutubeService){}

  ngOnInit(){
    this.yt.downloadMusic("ojala que si")
  }
}

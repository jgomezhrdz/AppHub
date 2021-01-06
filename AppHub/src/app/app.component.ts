import { Component } from '@angular/core';
import {YoutubeService} from './youtube/servicios/youtube.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AppHub';
  constructor(){}

  ngOnInit(){
  }
}

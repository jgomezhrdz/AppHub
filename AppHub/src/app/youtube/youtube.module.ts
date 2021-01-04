import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { YoutubeSearcherComponent } from './youtube-searcher/youtube-searcher.component';
import { FormsModule } from '@angular/forms';
import { YouTubePlayerModule } from "@angular/youtube-player";



@NgModule({
  declarations: [YoutubePlayerComponent, YoutubeSearcherComponent],
  imports: [
    CommonModule,
    FormsModule,
    YouTubePlayerModule
  ],
  bootstrap: [YoutubePlayerComponent, YoutubeSearcherComponent]

})
export class YoutubeModule { }

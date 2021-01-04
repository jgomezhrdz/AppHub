import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlayerComponent } from './youtube/youtube-player/youtube-player.component';
import { YoutubeSearcherComponent } from './youtube/youtube-searcher/youtube-searcher.component';
import { YoutubeModule } from './youtube/youtube.module';

const routes: Routes = [
  { path: 'YoutubeSearch', component: YoutubeSearcherComponent },
  { path: 'YoutubePlayer', component: YoutubePlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), YoutubeModule, BrowserModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

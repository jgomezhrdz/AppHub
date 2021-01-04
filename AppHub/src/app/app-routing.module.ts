import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YoutubePlayerComponent } from './youtube/youtube-player/youtube-player.component';
import { YoutubeSearcherComponent } from './youtube/youtube-searcher/youtube-searcher.component';

const routes: Routes = [
  { path: 'YoutubeSearch', component: YoutubeSearcherComponent },
  { path: 'YoutubePlayer', component: YoutubePlayerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

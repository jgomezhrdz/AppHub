import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { RegisterComponent } from './login/register/register.component';
import { BuscadorMusicaComponent } from './musica-offline/buscador-musica/buscador-musica.component';
import { ReproductorMusicaComponent } from './musica-offline/reproductor-musica/reproductor-musica.component';
import { BuscadorVideosComponent } from './videos-offline/buscador-videos/buscador-videos.component';
import { ReproductorVideosComponent } from './videos-offline/reproductor-videos/reproductor-videos.component';
import { YoutubePlayerComponent } from './youtube/youtube-player/youtube-player.component';
import { YoutubeSearcherComponent } from './youtube/youtube-searcher/youtube-searcher.component';
import { YoutubeModule } from './youtube/youtube.module';

const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'YoutubeSearch', component: YoutubeSearcherComponent },
  { path: 'YoutubePlayer', component: YoutubePlayerComponent },
  { path: 'busquedaVideoOff', component: BuscadorVideosComponent },
  { path: 'reproductorVideoOff', component: ReproductorVideosComponent },
  { path: 'busquedaMusicaOff', component: BuscadorMusicaComponent },
  { path: 'reproductorMusicaOff', component: ReproductorMusicaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), YoutubeModule, BrowserModule, CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { KeyedWrite } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { VideoYoutube } from '../video';
import { YoutubeService } from '../servicios/youtube.service';
import {Router} from '@angular/router';
import { EstrategiaBusqueda } from './Estrategias/estrategia-busqueda';
import { FactoriaEstrategiasBusqueda } from './factoria-estrategias-busqueda';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-youtube-searcher',
  templateUrl: './youtube-searcher.component.html',
  styleUrls: ['./youtube-searcher.component.css']
})
export class YoutubeSearcherComponent {
  keyword !: string;
  videos : VideoYoutube[] = [];
  estrategia !: EstrategiaBusqueda;
  private factoriaEstrategias = new FactoriaEstrategiasBusqueda(this.youtube, this.http)
  constructor(private youtube: YoutubeService, private router: Router, private http: HttpClient) {
  }

  watchVideo(video: VideoYoutube){
    sessionStorage.setItem("Video", JSON.stringify(video))
    this.router.navigateByUrl('/YoutubePlayer');
  }
  getVideosList(): void {
    this.estrategia.getVideos(this.keyword).subscribe(
      (data) => {
        console.log(data.items)
        this.videos = data.items.map((item: any) => {
          let video = new VideoYoutube(
            item.id.videoId,
            'https://www.youtube.com/watch?v='+item.id.videoId,
            item.snippet.channelId,
            'https://www.youtube.com/channel/'+item.snippet.channelId,
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

  change(e: any){
    this.estrategia = this.factoriaEstrategias.crearEstrategia(e.target.value);
  }

}

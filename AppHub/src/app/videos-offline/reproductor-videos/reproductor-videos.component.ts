import { Component, OnInit } from '@angular/core';
import { ListaVideosService } from '../lista-videos.service';
import { Video } from '../video';

@Component({
  selector: 'app-reproductor-videos',
  templateUrl: './reproductor-videos.component.html',
  styleUrls: ['./reproductor-videos.component.css']
})
export class ReproductorVideosComponent implements OnInit {

  videoActual !: Video;
  constructor(private listaVideos: ListaVideosService) { }

  ngOnInit(): void {
    this.videoActual = JSON.parse(sessionStorage.getItem("VideoOff") as string) as Video
  }

}

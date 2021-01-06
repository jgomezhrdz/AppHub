import { Injectable } from '@angular/core';
import { Video } from './video';
import { VideoYoutube } from '../youtube/video';
@Injectable({
  providedIn: 'root'
})

export class ListaVideosService {

  constructor() { }

  listaVideos = new Array();
  iterador = this.listaVideos[Symbol.iterator];
  
  borrarVideo(video: Video): void{
    if(this.listaVideos.includes(video.getId())){
      this.listaVideos.splice(this.listaVideos.indexOf(video), 1)
   }
   else{
     console.log("no hay ningun video con estas caracteristicas")
   }
  }
  añadirVideo(video: Video): void{
      this.listaVideos.push(video)
  }
}

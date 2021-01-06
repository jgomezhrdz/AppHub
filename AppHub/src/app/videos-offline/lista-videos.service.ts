import { Injectable } from '@angular/core';
import { Video } from './video';
import { VideoYoutube } from '../youtube/video';
@Injectable({
  providedIn: 'root'
})

export class ListaVideosService {

  constructor() { }

  listaVideos = new Map<string, Video>();
  iterador = this.listaVideos[Symbol.iterator];
  
  borrarVideo(video: Video): void{
    if(this.listaVideos.has(video.getId())){
       this.listaVideos.delete(video.getId())
    }
    else{
      console.log("no hay ningun video con estas caracteristicas")
    }
  }
  añadirVideo(video: Video): void{
      this.listaVideos.set(video.getId(), video)
  }
}

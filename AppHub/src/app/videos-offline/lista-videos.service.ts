import { Injectable } from '@angular/core';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})

export class ListaVideosService {

  constructor() { }

  listaVideos = new Map<String, Array<Video>>();
  iterador = this.listaVideos[Symbol.iterator];
  
  borrarVideo(video: Video): void{
    if(this.listaVideos.has("")){
      var aux = this.listaVideos.get("")
      aux?.splice(aux.indexOf(video), 1)
    }
    else{
      console.log("no hay ningun video con estas caracteristicas")
    }
  }
  añadirVideo(video: Video): void{
    if(this.listaVideos.has("")){
      this.listaVideos.get("")?.push(video);
    }
    else{
      this.listaVideos.set("", new Array())
    }
  }
}

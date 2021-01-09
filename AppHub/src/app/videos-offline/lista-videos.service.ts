import { Injectable } from '@angular/core';
import { Video } from './video';
import { VideoYoutube } from '../youtube/video';
@Injectable({
  providedIn: 'root'
})

export class ListaVideosService {


  listaVideos = new Array<Video>();
  iterador = this.listaVideos[Symbol.iterator];
  
  constructor() {
    this.listaVideos = JSON.parse(localStorage.getItem("Videos") as string) as Array<Video>
   }
  borrarVideo(video: Video): void{
    if(this.listaVideos.includes(video)){
      this.listaVideos.splice(this.listaVideos.indexOf(video), 1)
   }
   else{
     console.log("no hay ningun video con estas caracteristicas")
   }
  }
  añadirVideo(video: Video): void{
    this.listaVideos.push(video)
    localStorage.setItem("Videos", JSON.stringify(this.listaVideos))
      
  }
}

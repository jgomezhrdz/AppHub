import { Injectable } from '@angular/core';
import { Video } from './video';
import { VideoYoutube } from '../youtube/video';
@Injectable({
  providedIn: 'root'
})

export class ListaVideosService {


  listaVideos !: Array<Video>;
  
  constructor() {
    this.listaVideos = new Array<Video>();
    var aux = JSON.parse(localStorage.getItem("Videos") as string) as Array<any>;
    if((aux != null && aux != undefined) && aux.length != undefined){ 
      aux.forEach(elem =>{
        this.listaVideos.push(new Video(elem.title, elem.id))
      }) 
    }   
}
  borrarVideo(video: Video): void{
    if(!this.listaVideos.every(elem => {return (elem.getId() != video.getId())})){
      this.listaVideos.splice(this.listaVideos.indexOf(video), 1)
      localStorage.setItem("Videos", JSON.stringify(this.listaVideos)) 
   }
   else{
     console.log("no hay ningun video con estas caracteristicas")
   }
  }
  añadirVideo(video: Video): void{
    if(this.listaVideos.every(elem => {return (elem.getId() != video.getId())})) this.listaVideos.push(video)
    console.log(this.listaVideos.values)
    localStorage.setItem("Videos", JSON.stringify(this.listaVideos))  
  }

  restaurarLista(listaVideos : Array<Video>){
    this.listaVideos = listaVideos
    localStorage.setItem("Videos", JSON.stringify(this.listaVideos))  
  }
}

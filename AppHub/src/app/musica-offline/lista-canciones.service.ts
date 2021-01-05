import { Injectable } from '@angular/core';
import { ArchivoMusica } from './archivo-musica';

@Injectable({
  providedIn: 'root'
})
export class ListaCancionesService {

  constructor() { }

  listaVideos = new Map<String, Array<ArchivoMusica>>();
  iterador = this.listaVideos[Symbol.iterator];
  
  borrarVideo(cancion: ArchivoMusica): void{
    if(this.listaVideos.has("")){
      var aux = this.listaVideos.get("")
      aux?.splice(aux.indexOf(cancion), 1)
    }
    else{
      console.log("no hay ninguna cancion con estas caracteristicas")
    }
  }
  añadirVideo(cancion: ArchivoMusica): void{
    if(this.listaVideos.has("")){
      this.listaVideos.get("")?.push(cancion);
    }
    else{
      this.listaVideos.set("", new Array())
    }
  }
}

import { Injectable } from '@angular/core';
import { ArchivoMusica } from './archivo-musica';

@Injectable({
  providedIn: 'root'
})
export class ListaCancionesService {

  constructor() { }

  listaCanciones = new Array();
  iterador = this.listaCanciones[Symbol.iterator];
  
  
  borrarCancion(musica: ArchivoMusica): void{
    if(this.listaCanciones.includes(musica.getId())){
       this.listaCanciones.splice(this.listaCanciones.indexOf(musica), 1)
    }
    else{
      console.log("no hay ningun video con estas caracteristicas")
    }
  }
  
  añadirCancion(musica: ArchivoMusica): void{
      this.listaCanciones.push(musica)
  }
}

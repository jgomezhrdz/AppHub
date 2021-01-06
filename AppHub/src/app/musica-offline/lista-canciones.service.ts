import { Injectable } from '@angular/core';
import { ArchivoMusica } from './archivo-musica';

@Injectable({
  providedIn: 'root'
})
export class ListaCancionesService {

  constructor() { }

  listaCanciones = new Map<String, ArchivoMusica>();
  iterador = this.listaCanciones[Symbol.iterator];
  
  
  borrarCancion(musica: ArchivoMusica): void{
    if(this.listaCanciones.has(musica.getId())){
       this.listaCanciones.delete(musica.getId())
    }
    else{
      console.log("no hay ningun video con estas caracteristicas")
    }
  }
  añadirCancion(musica: ArchivoMusica): void{
      this.listaCanciones.set(musica.getId(), musica)
  }
}

import { Injectable } from '@angular/core';
import { ArchivoMusica } from './archivo-musica';

@Injectable({
  providedIn: 'root'
})
export class ListaCancionesService {

  listaCanciones : Array<ArchivoMusica>;

  constructor() { 
    this.listaCanciones = new Array<ArchivoMusica>();
    var aux = JSON.parse(localStorage.getItem("Canciones") as string) as Array<any>;
    if((aux != null && aux != undefined) && aux.length != undefined){ 
      aux.forEach(elem =>{
        this.listaCanciones.push(new ArchivoMusica(elem.title, elem.id))
      }) 
    }   
  }

  añadirCancion(musica: ArchivoMusica): void{
    if(this.listaCanciones.every((elem : ArchivoMusica) => {return (elem.getId() != musica.getId())})){
      this.listaCanciones.push(musica)
      localStorage.setItem("Canciones", JSON.stringify(this.listaCanciones)) 
    }
  }

  borrarCancion(musica: ArchivoMusica): void{
    if(!this.listaCanciones.every(elem => {return (elem.getId() != musica.getId())})){
      this.listaCanciones.splice(this.listaCanciones.indexOf(musica), 1)
      localStorage.setItem("Canciones", JSON.stringify(this.listaCanciones))  
    }
    else{
      console.log("no hay ningun video con estas caracteristicas")
    }
  }

  restaurarLista(listaMusica : Array<ArchivoMusica>){
    this.listaCanciones = listaMusica
    localStorage.setItem("Videos", JSON.stringify(this.listaCanciones))  
  }
}

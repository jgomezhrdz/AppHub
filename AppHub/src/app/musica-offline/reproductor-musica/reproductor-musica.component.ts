import { Component, OnInit } from '@angular/core';
import { ArchivoMusica } from '../archivo-musica';
import { ListaCancionesService } from '../lista-canciones.service';
import { AgregadoArray } from './agregado-array';
import { IteratorArray } from './iteratorArray';

@Component({
  selector: 'app-reproductor-musica',
  templateUrl: './reproductor-musica.component.html',
  styleUrls: ['./reproductor-musica.component.css']
})
export class ReproductorMusicaComponent implements OnInit {
  player = document.getElementById('player');
  cancionActual !: ArchivoMusica
  iterador : IteratorArray
  constructor(private canciones: ListaCancionesService) { 
    this.iterador = new IteratorArray(new AgregadoArray(this.canciones.listaCanciones))
   

  }

  ngOnInit(): void {
    var aux = JSON.parse(sessionStorage.getItem("cancionOff") as string)
    this.cancionActual = new ArchivoMusica(aux.title, aux.id)
    var index = 0
    this.canciones.listaCanciones.forEach((elem : ArchivoMusica)=>{
      if(elem.getId() == this.cancionActual.getId())
        index = this.canciones.listaCanciones.indexOf(elem)
    })
    this.iterador.setIndex(index)
    console.log(this.iterador)

  }

  pasarCancion(){
    this.player.play()
    this.cancionActual = this.iterador.getNext()
  }
  retrocederCancion(){
    var player = ("player");
    this.cancionActual = this.iterador.getPrevious()
  }
}

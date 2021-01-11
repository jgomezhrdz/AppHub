import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
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
  player !: HTMLAudioElement
  @ViewChild('player') set playerRef(ref: ElementRef<HTMLAudioElement>) {
    this.player = ref.nativeElement;
  }
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
    this.cancionActual = this.iterador.getNext()
    this.player.load()
    var playPromise = this.player.play()

    if (playPromise !== undefined) {
      playPromise.then(_ => {
      })
      .catch(error => {
      }); 
    }
  }
  retrocederCancion(){
    this.cancionActual = this.iterador.getPrevious()
    this.player.load()
    var playPromise = this.player.play()

    if (playPromise !== undefined) {
      playPromise.then(_ => {
      })
      .catch(error => {
      }); 
    }
  }
}

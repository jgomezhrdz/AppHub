import { Component, OnInit } from '@angular/core';
import { ArchivoMusica } from '../archivo-musica';
import { ListaCancionesService } from '../lista-canciones.service';

@Component({
  selector: 'app-reproductor-musica',
  templateUrl: './reproductor-musica.component.html',
  styleUrls: ['./reproductor-musica.component.css']
})
export class ReproductorMusicaComponent implements OnInit {

  cancionActual !: ArchivoMusica
  constructor(private canciones: ListaCancionesService) { }

  ngOnInit(): void {
    this.cancionActual = JSON.parse(sessionStorage.getItem("CancionOff") as string) as ArchivoMusica
  }

  pasarCancion(){
    
  }
}

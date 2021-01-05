import { Component, OnInit } from '@angular/core';
import { ListaCancionesService } from '../lista-canciones.service';

@Component({
  selector: 'app-reproductor-musica',
  templateUrl: './reproductor-musica.component.html',
  styleUrls: ['./reproductor-musica.component.css']
})
export class ReproductorMusicaComponent implements OnInit {

  constructor(private canciones: ListaCancionesService) { }

  ngOnInit(): void {
  }

}

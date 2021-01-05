import { Component, OnInit } from '@angular/core';
import { ListaCancionesService } from '../lista-canciones.service';

@Component({
  selector: 'app-buscador-musica',
  templateUrl: './buscador-musica.component.html',
  styleUrls: ['./buscador-musica.component.css']
})
export class BuscadorMusicaComponent implements OnInit {

  constructor(private canciones: ListaCancionesService) { }

  ngOnInit(): void {
  }

}

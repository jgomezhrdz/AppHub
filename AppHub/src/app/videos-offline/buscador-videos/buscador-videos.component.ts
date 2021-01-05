import { Component, OnInit } from '@angular/core';
import { ListaVideosService } from '../lista-videos.service';
import { Video } from '../video';
import { ImplementacionAbstracta } from './implementaciones/implementacion-abstracta';

@Component({
  selector: 'app-buscador-videos',
  templateUrl: './buscador-videos.component.html',
  styleUrls: ['./buscador-videos.component.css']
})
export class BuscadorVideosComponent {
  videos = new Array<Video>()
  implementacion !: ImplementacionAbstracta
  constructor(private listaVideos: ListaVideosService) { }

  busqueda(): void{
    this.implementacion.busqueda();
  }
}

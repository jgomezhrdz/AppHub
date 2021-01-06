import { Component, OnInit } from '@angular/core';
import { ListaVideosService } from '../lista-videos.service';

@Component({
  selector: 'app-buscador-videos',
  templateUrl: './buscador-videos.component.html',
  styleUrls: ['./buscador-videos.component.css']
})
export class BuscadorVideosComponent implements OnInit {

  constructor(private listaVideos: ListaVideosService) { }

  ngOnInit(): void {
  }

}

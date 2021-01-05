import { Component, OnInit } from '@angular/core';
import { ListaVideosService } from '../lista-videos.service';

@Component({
  selector: 'app-reproductor-videos',
  templateUrl: './reproductor-videos.component.html',
  styleUrls: ['./reproductor-videos.component.css']
})
export class ReproductorVideosComponent implements OnInit {

  constructor(private listaVideos: ListaVideosService) { }

  ngOnInit(): void {
  }

}

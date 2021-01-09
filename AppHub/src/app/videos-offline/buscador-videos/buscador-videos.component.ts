import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaVideosService } from '../lista-videos.service';
import { Video } from '../video';
import { BusquedaTitulo } from './implementaciones/busqueda-titulo';
import { BusquedaId } from './implementaciones/busquedaID';
import { Implementacion } from './implementaciones/implementacion';

@Component({
  selector: 'app-buscador-videos',
  templateUrl: './buscador-videos.component.html',
  styleUrls: ['./buscador-videos.component.css']
})
export class BuscadorVideosComponent implements OnInit {
  implementacion !: Implementacion;
  implementacionSeleccionada !: number;
  implementaciones = new Array<Implementacion>(new BusquedaTitulo(this.listaVideos), new BusquedaId(this.listaVideos));;
  valor !: string;
  video !: Video;
  listaCoincidentes = new Array<Video>()
  constructor(private listaVideos: ListaVideosService, private router: Router) { }

  ngOnInit(): void {
  }

  buscar(){
    this.listaCoincidentes = this.implementacion.buscar(this.valor)
    
  }

  watch(video: Video){
    console.log(this.listaCoincidentes)
    console.log(video)
    this.router.navigateByUrl("reproductorVideoOff")
  }
  change(e: any){
    this.implementacion = this.implementaciones[e.target.value];
    console.log(this.implementacion);
  }
  
}

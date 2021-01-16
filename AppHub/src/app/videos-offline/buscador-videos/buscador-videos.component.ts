import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaVideosService } from '../lista-videos.service';
import { Video } from '../video';
import { ComandoBorrar } from './command/comando-borrar';
import { Invocador } from './command/invocador';
import { AbstraccionBusqueda } from './implementaciones/abstraccion-busqueda';
import { BusquedaTitulo } from './implementaciones/busqueda-titulo';
import { BusquedaId } from './implementaciones/busquedaId';
import { Implementacion } from './implementaciones/implementacion';

@Component({
  selector: 'app-buscador-videos',
  templateUrl: './buscador-videos.component.html',
  styleUrls: ['./buscador-videos.component.css']
})
export class BuscadorVideosComponent extends AbstraccionBusqueda implements OnInit {
  implementacionSeleccionada !: number;
  keywords !: string;
  video !: Video;
  invocador = new Invocador()
  constructor(listaVideos: ListaVideosService, private router: Router) {
    super(listaVideos) 
    this.invocador.setComando(new ComandoBorrar(this.listaVideos, this.video))
  }

  ngOnInit(): void {
  }

  buscar(){
    super.valor = (this.keywords)
    super.buscar()
  }

  borrar(video: Video){
    this.video = video
    this.invocador.setVideoComando(video)
    if(confirm("Se ha seleccionado el video para ser borrado, ¿esta seguro?"))
    {
      this.invocador.ejecutarComando()
      if(confirm("Warning: Se ha borrado un video, ¿desea restaurarlo? (Ultima oportunidad)")){
        this.deshacer()
      }
      else{
        super.getCoincidentes().splice(this.listaCoincidentes.indexOf(video), 1)
      }
    } 
  }

  deshacer(){
    this.invocador.deshacerComando()
    console.log(this.listaVideos.listaVideos)
  }
  
  watch(video: Video){
    sessionStorage.setItem("videoOff", JSON.stringify(video))
    this.router.navigateByUrl("reproductorVideoOff")
  }

  change(e: any){
    super.setImplementacion(e.target.value);
  }
  
}
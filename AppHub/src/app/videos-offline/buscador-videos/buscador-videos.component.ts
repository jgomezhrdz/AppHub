import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListaVideosService } from '../lista-videos.service';
import { Video } from '../video';
import { ComandoBorrar } from './command/comando-borrar';
import { Invocador } from './command/invocador';
import { BusquedaTitulo } from './implementaciones/busqueda-titulo';
import { BusquedaId } from './implementaciones/busquedaId';
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
  invocador = new Invocador()
  constructor(private listaVideos: ListaVideosService, private router: Router) { 
    this.invocador.setComando(new ComandoBorrar(this.listaVideos, this.video))
  }

  ngOnInit(): void {
  }

  buscar(){
    this.listaCoincidentes = this.implementacion.buscar(this.valor)
  }

  borrar(video: Video){
    this.video = video
    if(confirm("Se ha seleccionado el video para ser borrado, ¿esta seguro?")){
      this.invocador.ejecutarComando()
    }
    if(confirm("Warning: Se ha borrado un video, ¿desea restaurarlo? (Ultima oportunidad)")){
      this.deshacer()
    }
    else{
      this.listaCoincidentes.splice(this.listaCoincidentes.indexOf(video), 1)
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
    this.implementacion = this.implementaciones[e.target.value];
    console.log(this.implementacion);
  }
  
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchivoMusica } from '../archivo-musica';
import { ListaCancionesService } from '../lista-canciones.service';
import { ComandoBorrar } from './command/comando-borrar';
import { Invocador } from './command/invocador';
import { AbstraccionBusqueda } from './implementaciones/abstraccion-busqueda';
import { BusquedaTitulo } from './implementaciones/busqueda-titulo';
import { BusquedaId } from './implementaciones/busquedaId';
import { Implementacion } from './implementaciones/implementacion';

@Component({
  selector: 'app-buscador-musica',
  templateUrl: './buscador-musica.component.html',
  styleUrls: ['./buscador-musica.component.css']
})
export class BuscadorMusicaComponent extends AbstraccionBusqueda implements OnInit {

  implementacionSeleccionada !: number;
  keywords !: string;
  musica !: ArchivoMusica;
  invocador = new Invocador()
  constructor(listaCanciones: ListaCancionesService, private router: Router) { 
    super(listaCanciones)
    this.invocador.setComando(new ComandoBorrar(this.listaCanciones, this.musica))
  }

  ngOnInit(): void {
  }

  buscar(){
    super.valor = this.keywords
    super.buscar()
  }

  borrar(musica: ArchivoMusica){
    this.musica = musica
    this.invocador.setMusicaComando(musica)
    if(confirm("Se ha seleccionado el video para ser borrado, ¿esta seguro?"))
    {
      this.invocador.ejecutarComando()
      if(confirm("Warning: Se ha borrado un video, ¿desea restaurarlo? (Ultima oportunidad)")){
        this.deshacer()
      }
      else{
        super.getCoincidentes().splice(this.listaCoincidentes.indexOf(musica), 1)
      }
    } 
  }

  deshacer(){
    this.invocador.deshacerComando()
    console.log(this.listaCanciones.listaCanciones)
  }
  
  watch(video: ArchivoMusica){
    sessionStorage.setItem("cancionOff", JSON.stringify(video))
    this.router.navigateByUrl("reproductorMusicaOff")
  }
  change(e: any){
    this.implementacion = this.implementaciones[e.target.value];
    console.log(this.implementacion);
  }
}

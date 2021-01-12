import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArchivoMusica } from '../archivo-musica';
import { ListaCancionesService } from '../lista-canciones.service';
import { ComandoBorrar } from './command/comando-borrar';
import { Invocador } from './command/invocador';
import { BusquedaTitulo } from './implementaciones/busqueda-titulo';
import { BusquedaId } from './implementaciones/busquedaId';
import { Implementacion } from './implementaciones/implementacion';

@Component({
  selector: 'app-buscador-musica',
  templateUrl: './buscador-musica.component.html',
  styleUrls: ['./buscador-musica.component.css']
})
export class BuscadorMusicaComponent implements OnInit {

  implementacion !: Implementacion;
  implementacionSeleccionada !: number;
  implementaciones = new Array<Implementacion>(new BusquedaTitulo(this.listaCanciones), new BusquedaId(this.listaCanciones));;
  valor !: string;
  musica !: ArchivoMusica;
  listaCoincidentes = new Array<ArchivoMusica>()
  invocador = new Invocador()
  constructor(private listaCanciones: ListaCancionesService, private router: Router) { 
    this.invocador.setComando(new ComandoBorrar(this.listaCanciones, this.musica))
  }

  ngOnInit(): void {
  }

  buscar(){
    this.listaCoincidentes = this.implementacion.buscar(this.valor)
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
        this.listaCoincidentes.splice(this.listaCoincidentes.indexOf(musica), 1)
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

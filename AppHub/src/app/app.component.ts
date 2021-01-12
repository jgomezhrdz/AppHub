import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { ControladorEstados } from './appState/controlador-estados';
import {YoutubeService} from './youtube/servicios/youtube.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'AppHub';
  controladorEstados: ControladorEstados
  constructor(private router: Router){
  this.controladorEstados = new ControladorEstados(this.router)
 
  }
  ngOnInit(): void {
  }
  ngDoCheck(): void {
  this.controladorEstados.comprobarEstado();
  }

  getRouter(){
    return this.router
  }
}

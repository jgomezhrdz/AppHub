import { Router } from "@angular/router";
import { Estado } from "./estado";
import { EstadoSinInternet } from "./estado-sin-internet";

export class ControladorEstados {

    private estadoActual !: Estado
    sesionIniciada = false;
    conInternet = false;
    constructor(private router: Router){
        this.estadoActual = new EstadoSinInternet(this.router)
    }

    comprobarEstado(){
        this.estadoActual.ejecutar(this);
    }

    getState(){
        return this.estadoActual
    }

    setState(estadoActual: Estado){
        this.estadoActual = estadoActual
    }
}

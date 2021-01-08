import { Router } from "@angular/router";
import { ControladorEstados } from "./controlador-estados";
import { Estado } from "./estado";
import { EstadoNotLogged } from "./estado-not-logged";
export class EstadoSinInternet implements Estado{

    constructor(private router: Router,){}

    ejecutar(controlador: ControladorEstados): void {
        if(window.navigator.onLine){
            controlador.conInternet = true;
            controlador.setState(new EstadoNotLogged(this.router))
            controlador.comprobarEstado();
        }
        console.log(window.navigator.onLine)
    }
}

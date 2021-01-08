import { Router } from "@angular/router";
import { ControladorEstados } from "./controlador-estados";
import { Estado } from "./estado";
import { EstadoSinInternet } from "./estado-sin-internet";

export class EstadoLogged implements Estado{

    constructor(private router: Router){
        
    }
    ejecutar(controlador: ControladorEstados): void {
        if(sessionStorage.getItem("token") != null && this.router.url === "/Login"){
            this.router.navigateByUrl("/YoutubeSearch")
        }
        else if(!window.navigator.onLine){
            controlador.conInternet = false;
            controlador.setState(new EstadoSinInternet(this.router))
            controlador.comprobarEstado();
        }
        
    }
}

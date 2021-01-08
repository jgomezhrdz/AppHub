import { Router } from "@angular/router";
import { fromEvent } from "rxjs";
import { ControladorEstados } from "./controlador-estados";
import { Estado } from "./estado";
import { EstadoLogged } from "./estado-logged"
import { EstadoSinInternet } from "./estado-sin-internet";

export class EstadoNotLogged implements Estado{

    constructor(private router: Router){
            
    }

    ejecutar(controlador: ControladorEstados): void {
        if(sessionStorage.getItem("token") != null){
            controlador.sesionIniciada = true;
            controlador.setState(new EstadoLogged(this.router))
            controlador.comprobarEstado();
        }
        else if(sessionStorage.getItem("token") == null 
        && (this.router.url != "/Login" && this.router.url != "/Register")){
            controlador.sesionIniciada = false;
            console.log(this.router.url)
            this.router.navigateByUrl("Login")
        }  
        else if(!navigator.onLine){
            controlador.conInternet = false;
            controlador.setState(new EstadoSinInternet(this.router))
            controlador.comprobarEstado();
        }
    }
}

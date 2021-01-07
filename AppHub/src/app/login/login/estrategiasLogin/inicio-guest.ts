import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { Usuario } from "src/app/usuario/usuario";
import { EstrategiaLogin } from "./estrategia-login";

export class InicioGuest implements EstrategiaLogin{

    constructor(private fachadaDb: FachadaPeticionesService){

    }
    ejecutar(usuario: Usuario) {
        this.fachadaDb.inicioSesionUsuarioGuest(usuario);
    } 
}

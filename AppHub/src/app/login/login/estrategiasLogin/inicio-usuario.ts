import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { Usuario } from "src/app/usuario/usuario";

export class InicioUsuario {
    constructor(private fachadaDb: FachadaPeticionesService){

    }
    ejecutar(usuario: Usuario) {
        this.fachadaDb.inicioSesionUsuario(usuario);
    } 
}


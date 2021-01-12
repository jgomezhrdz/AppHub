import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { Usuario } from "src/app/usuario/usuario";
import { EstrategiaLogin } from "./estrategia-login";

export class InicioGuest implements EstrategiaLogin{

    constructor(private fachadaDb: FachadaPeticionesService){

    }
    async ejecutar(usuario: Usuario) {
        return await this.fachadaDb.inicioSesionUsuarioGuest(usuario).then(
            data =>{
                if(data.res == "OK")
                {
                    sessionStorage.setItem("token", data.token);
                    return true
                }
                else
                    return false
            },
            error =>{
                return false
            }
        );
    } 
}

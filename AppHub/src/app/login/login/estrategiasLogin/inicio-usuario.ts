import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { Usuario } from "src/app/usuario/usuario";

export class InicioUsuario {
    constructor(private fachadaDb: FachadaPeticionesService){

    }
    async ejecutar(usuario: Usuario) {
        return await this.fachadaDb.inicioSesionUsuario(usuario).then(
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


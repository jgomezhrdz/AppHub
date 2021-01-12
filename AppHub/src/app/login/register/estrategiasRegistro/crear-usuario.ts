import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { PeticionesUserService } from "src/app/db-connection/peticiones-user.service";
import { Usuario } from "src/app/usuario/usuario";
import { UsuarioAdmin } from "src/app/usuario/usuario-admin";
import { Estrategia } from "./estrategia";

export class CrearUsuario implements Estrategia{
    constructor(private peticiones: FachadaPeticionesService){

    }
    ejecutar(usuario: Usuario): Promise<boolean>{
        return this.peticiones.registrarUsuario(usuario).then(
            data =>{
                if(data.res == "OK")
                    return true
                else
                    return false
            },
            error =>{
                return false
            }
        )
    }

}

import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { PeticionesGuestService } from "src/app/db-connection/peticiones-guest.service";
import { Usuario } from "src/app/usuario/usuario";
import { UsuarioComun } from "src/app/usuario/usuario-comun";

export class CrearGuest {

    constructor(private peticiones: FachadaPeticionesService){

    }
    ejecutar(usuario: Usuario) : Promise<boolean>{
        return this.peticiones.registrarUsuarioGuest(usuario).then(
            data =>{
                console.log(data)
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

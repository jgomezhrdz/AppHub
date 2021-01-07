import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { PeticionesUserService } from "src/app/db-connection/peticiones-user.service";
import { Usuario } from "src/app/usuario/usuario";
import { UsuarioAdmin } from "src/app/usuario/usuario-admin";
import { Estrategia } from "./estrategia";

export class CrearUsuario implements Estrategia{
    constructor(private peticiones: FachadaPeticionesService){

    }
    ejecutar(usuario: UsuarioAdmin) {
        this.peticiones.registrarUsuario(usuario)
    }

}

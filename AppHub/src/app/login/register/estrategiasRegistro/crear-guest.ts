import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { PeticionesGuestService } from "src/app/db-connection/peticiones-guest.service";
import { UsuarioComun } from "src/app/usuario/usuario-comun";

export class CrearGuest {

    constructor(private peticiones: FachadaPeticionesService){

    }
    ejecutar(usuario: UsuarioComun) {
        this.peticiones.registrarUsuarioGuest(usuario)
    }
}

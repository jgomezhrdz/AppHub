import { UsuarioTipo } from "src/app/db-connection/peticiones-guest.service"
import { guestTipo } from "src/app/db-connection/peticiones-user.service"

export class FactoriaLogin {
    private ADMIN = 1
    private GUEST = 2

    constructor(){}

    crearUsuario(valor: number, id: string, password: string){
        if(valor == this.ADMIN){
            return new UsuarioTipo(id, password)
        }
        else{
            return new guestTipo(id, password)
        }
    }
}

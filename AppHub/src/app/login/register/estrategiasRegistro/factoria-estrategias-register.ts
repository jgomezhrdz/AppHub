import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { PeticionesUserService } from "src/app/db-connection/peticiones-user.service";
import { CrearGuest } from "./crear-guest";
import { CrearUsuario } from "./crear-usuario";

export class FactoriaEstrategiasRegister {
    private ADMIN = 1;
    private GUEST = 2;
    constructor(private fachada: FachadaPeticionesService){}
    crearEstrategia(valor: number){
        if(valor == this.ADMIN){
            return new CrearUsuario(this.fachada)
        }
        else{
            return new CrearGuest(this.fachada)
        }
    }
}

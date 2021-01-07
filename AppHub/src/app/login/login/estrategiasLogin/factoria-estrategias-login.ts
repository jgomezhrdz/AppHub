import { FachadaPeticionesService } from "src/app/db-connection/fachada-peticiones.service";
import { InicioGuest } from "./inicio-guest";
import { InicioUsuario } from "./inicio-usuario";

export class FactoriaEstrategiasLogin {

    private readonly  ADMIN = 1;
    private readonly  GUEST = 2;
    constructor(private fachada: FachadaPeticionesService){}
    
    crearEstrategia(valor: number){
        if(valor == this.ADMIN){
            return new InicioUsuario(this.fachada)
        }
        else{
            return new InicioGuest(this.fachada)
        }
    }
}

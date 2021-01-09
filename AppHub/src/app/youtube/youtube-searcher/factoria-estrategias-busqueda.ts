import { HttpClient } from "@angular/common/http";
import { YoutubeService } from "../servicios/youtube.service";
import { BusquedaCategoria } from "./Estrategias/busqueda-categoria";
import { BusquedaKeyWord } from "./Estrategias/busqueda-key-word";

export class FactoriaEstrategiasBusqueda {

    private KEYWORD = 1;
    private CATEGORY = 2;
    constructor(private yt: YoutubeService, private http: HttpClient){
    }

    crearEstrategia(valor: number){
        if(valor == this.KEYWORD){
            return new BusquedaKeyWord(this.yt, this.http)
        }
        else{
            return new BusquedaCategoria(this.yt, this.http)
        }
    }
}

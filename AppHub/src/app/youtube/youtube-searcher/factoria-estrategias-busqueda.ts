import { HttpClient } from "@angular/common/http";
import { YoutubeService } from "../servicios/youtube.service";
import { dateOrder } from "./Estrategias/dateOrder";
import { ratingOrder } from "./Estrategias/ratingOrder";

export class FactoriaEstrategiasBusqueda {

    private RATING = 1;
    constructor(private yt: YoutubeService, private http: HttpClient){
    }

    crearEstrategia(valor: number){
        if(valor == this.RATING){
            return new ratingOrder(this.yt, this.http)
        }
        else{
            return new dateOrder(this.yt, this.http)
        }
    }
}

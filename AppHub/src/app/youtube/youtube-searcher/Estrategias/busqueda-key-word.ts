import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { YoutubeService } from "../../servicios/youtube.service"
import { EstrategiaBusqueda } from "./estrategia-busqueda"

export class BusquedaKeyWord implements EstrategiaBusqueda{
    private url = "&q="
    private url2 = "&type=video&videoCaption=closedCaption&key="

    constructor(private yt: YoutubeService, private http: HttpClient){
    }

    getVideos(_keyWord: string): Observable<any>{
        const url = this.yt.getUrl()+this.url+_keyWord+this.url2+this.yt.getKey
        return this.http.get<any>(this.url)
      }

}

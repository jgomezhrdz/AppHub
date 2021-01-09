import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { YoutubeService } from "../../servicios/youtube.service"
import { EstrategiaBusqueda } from "./estrategia-busqueda"

export class BusquedaCategoria implements EstrategiaBusqueda{
    private url = "&videoCategoryId=ss"
    private url2 ="&key="

    constructor(private yt: YoutubeService, private http: HttpClient){

    }
    getVideos(categoryId: string): Observable<any>{
        const url = this.yt.getUrl()+this.url+categoryId+this.url2+this.yt.getKey
        return this.http.get<any>(this.url)
      }
}

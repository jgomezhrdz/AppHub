import { HttpClient } from "@angular/common/http"
import { Observable } from "rxjs"
import { YoutubeService } from "../../servicios/youtube.service"
import { EstrategiaBusqueda } from "./estrategia-busqueda"

export class dateOrder implements EstrategiaBusqueda{
    private url1 = "&q="
    private url2 ="&order=date&key="

    constructor(private yt: YoutubeService, private http: HttpClient){

    }
    getVideos(categoryId: string): Observable<any>{
        const url = this.yt.getUrl()+this.url1+categoryId+this.url2+this.yt.getKey()
        console.log(url)
        return this.http.get<any>(url)
      }
}

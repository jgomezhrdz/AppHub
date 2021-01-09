import { Observable } from "rxjs";

export interface EstrategiaBusqueda {

    getVideos(_keyWord: string): Observable<any>
}

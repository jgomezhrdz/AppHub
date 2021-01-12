import { ListaVideosService } from "../../lista-videos.service";
import { Video } from "../../video";
import { ComandoDeshacer } from "./comando-deshacer";
import {cloneDeep} from 'lodash';

export class ComandoBorrar implements ComandoDeshacer{

    video !: Video
    listaVideosAuxiliar !: Array<Video>
    constructor(private listaVideos: ListaVideosService, video: Video){
        this.video = video
    }
    deshacer(): void {
        var aux = cloneDeep(this.listaVideosAuxiliar)
        this.listaVideos.restaurarLista(this.listaVideosAuxiliar)
        this.listaVideosAuxiliar = aux
    }
    rehacer(): void {
        var aux = cloneDeep(this.listaVideosAuxiliar)
        this.listaVideos.restaurarLista(this.listaVideosAuxiliar)
        this.listaVideosAuxiliar = aux
    }
    ejecutar(): void {
        console.log(this.video)
        this.listaVideosAuxiliar = cloneDeep(this.listaVideos.listaVideos)
        this.listaVideos.borrarVideo(this.video)
    }
    setVideo(video: Video){
        this.video = video
    }
    getVideo(){
        return this.video
    }
}

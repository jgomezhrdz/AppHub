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
        this.listaVideos.listaVideos = this.listaVideosAuxiliar
        this.listaVideosAuxiliar = aux
    }
    rehacer(): void {
        var aux = cloneDeep(this.listaVideosAuxiliar)
        this.listaVideos.listaVideos = this.listaVideosAuxiliar
        this.listaVideosAuxiliar = aux
    }
    ejecutar(): void {
        this.listaVideosAuxiliar = cloneDeep(this.listaVideos.listaVideos)
        this.listaVideos.borrarVideo(this.video)
    }
    setVideo(video: Video){
        return this.video
    }
    getVideo(){
        return this.video
    }
}
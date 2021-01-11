import { ListaCancionesService } from "../../lista-canciones.service";
import { ArchivoMusica } from "../../archivo-musica";
import { ComandoDeshacer } from "./comando-deshacer";
import {cloneDeep} from 'lodash';

export class ComandoBorrar implements ComandoDeshacer{

    musica !: ArchivoMusica
    listaMusicaAuxiliar !: Array<ArchivoMusica>
    constructor(private listaCanciones: ListaCancionesService, musica: ArchivoMusica){
        this.musica = musica
    }
    deshacer(): void {
        var aux = cloneDeep(this.listaMusicaAuxiliar)
        this.listaCanciones.listaCanciones = this.listaMusicaAuxiliar
        this.listaMusicaAuxiliar = aux
    }
    rehacer(): void {
        var aux = cloneDeep(this.listaMusicaAuxiliar)
        this.listaCanciones.listaCanciones = this.listaMusicaAuxiliar
        this.listaMusicaAuxiliar = aux
    }
    ejecutar(): void {
        this.listaMusicaAuxiliar = cloneDeep(this.listaCanciones.listaCanciones)
        this.listaCanciones.borrarCancion(this.musica)
    }
    setVideo(musica: ArchivoMusica){
        return this.musica
    }
    getVideo(){
        return this.musica
    }
}

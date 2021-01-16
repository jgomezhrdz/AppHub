import { ListaVideosService } from "../../lista-videos.service";
import { Video } from "../../video";
import { BusquedaTitulo } from "./busqueda-titulo";
import { BusquedaId } from "./busquedaId";
import { Implementacion } from "./implementacion";

export class AbstraccionBusqueda {
    protected implementacion !: Implementacion;
    protected implementaciones = new Array<Implementacion>(new BusquedaTitulo(this.listaVideos), new BusquedaId(this.listaVideos));
    protected valor !: string;
    protected listaCoincidentes = new Array<Video>()

    constructor(protected listaVideos: ListaVideosService) { 
    }

    buscar(){
        console.log(this.valor)
        this.listaCoincidentes = this.implementacion.buscar(this.valor)
        console.log(this.listaCoincidentes)
    }

    setImplementacion(valor: number){
        this.implementacion = this.implementaciones[valor]
        
    }

    getCoincidentes(){
        return this.listaCoincidentes
    }
    
    setValor(valor: string){
        this.valor = valor
    }
}

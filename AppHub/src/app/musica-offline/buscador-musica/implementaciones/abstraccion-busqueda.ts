import { ArchivoMusica } from "../../archivo-musica";
import { ListaCancionesService } from "../../lista-canciones.service";
import { BusquedaTitulo } from "./busqueda-titulo";
import { BusquedaId } from "./busquedaId";
import { Implementacion } from "./implementacion";

export class AbstraccionBusqueda {
    protected implementacion !: Implementacion;
    protected implementaciones = new Array<Implementacion>(new BusquedaTitulo(this.listaCanciones), new BusquedaId(this.listaCanciones));
    protected valor !: string;
    protected listaCoincidentes = new Array<ArchivoMusica>()

    constructor(protected listaCanciones: ListaCancionesService) { 
    }

    buscar(){
        console.log(this.valor)
        console.log(this.implementacion)
        this.listaCoincidentes = this.implementacion.buscar(this.valor)
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

import { Agregado } from "./agregado";
import { IteratorArray } from "./iteratorArray";

export class AgregadoArray implements Agregado{
    lista : Array<any>

    constructor(lista: Array<any>){
        this.lista = lista
    }
    crearIterador(): IteratorArray {
        return new IteratorArray(this)
    }
}

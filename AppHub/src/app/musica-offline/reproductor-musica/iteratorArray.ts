import { ArchivoMusica } from "../archivo-musica";
import { Agregado } from "./agregado";
import { AgregadoArray } from "./agregado-array";
import { Iterador } from "./iterador";

export class IteratorArray implements Iterador{
    private lista : AgregadoArray
    private index : number

    constructor(lista: AgregadoArray){
        this.lista = lista
        this.index = 0
    }
    setIndex(index:number){
        this.index = index
    }

    getIndex(){
        return this.index
    }
    peekNext() : ArchivoMusica{
        var musica !: ArchivoMusica
        if(this.hasMore())
            musica = this.lista.lista[this.index+1]
        else
            musica = new ArchivoMusica("", "")
        return musica
    }
    peekPrevious() : ArchivoMusica{
        var musica !: ArchivoMusica
        if(this.hasMorePrevious())
            musica = this.lista.lista[this.index-1]
        else
            musica = new ArchivoMusica("", "")
        return musica
    }
    getNext(): ArchivoMusica {
        this.index += 1
        return (this.lista.lista[this.index])
    }
    getPrevious(): ArchivoMusica {
        this.index -= 1
        return (this.lista.lista[this.index])
    }
    hasMorePrevious(): boolean {
        return this.lista.lista[this.index - 1] != null
    }
    hasMore(): boolean {
        return this.lista.lista[this.index + 1] != null
    }
}

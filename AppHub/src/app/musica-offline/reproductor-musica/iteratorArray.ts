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
            musica = this.lista.lista[0]
        return musica
    }
    peekPrevious() : ArchivoMusica{
        var musica !: ArchivoMusica
        if(this.hasMorePrevious())
            musica = this.lista.lista[this.index-1]
        else
            musica = this.lista.lista[this.lista.lista.length-1]
        return musica
    }
    getNext(): ArchivoMusica {
        if(this.hasMore())
            this.index += 1
        else
            this.index = 0
        return (this.lista.lista[this.index])
    }
    getPrevious(): ArchivoMusica {
        if(this.hasMorePrevious())
            this.index -= 1
        else
            this.index = this.lista.lista.length-1
        return (this.lista.lista[this.index])
    }
    hasMorePrevious(): boolean {
        return this.lista.lista[this.index - 1] != null
    }
    hasMore(): boolean {
        return this.lista.lista[this.index + 1] != null
    }
}

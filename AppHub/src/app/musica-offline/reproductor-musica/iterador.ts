import { ArchivoMusica } from "../archivo-musica"

export interface Iterador {
    getNext(): ArchivoMusica
    getPrevious(): ArchivoMusica
    hasMore(): boolean
}

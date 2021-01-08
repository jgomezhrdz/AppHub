import { ListaVideosService } from "../../lista-videos.service";
import { Implementacion } from "./implementacion";

export class BusquedaId implements Implementacion{

    constructor(private listaVideos: ListaVideosService){

    }

    buscar(valor: string): Array<any> {
        var coincidentes = new Array();
        this.listaVideos.listaVideos.forEach(element =>{
            if(this.similar(element.getId(), valor)>=50){
                coincidentes.push(element)
            }
        })
        return coincidentes;
    }

    similar(a: string, b: string) {
        var equivalency = 0;
        var minLength = (a.length > b.length) ? b.length : a.length;    
        var maxLength = (a.length < b.length) ? b.length : a.length;    
        for(var i = 0; i < minLength; i++) {
            if(a[i] == b[i]) {
                equivalency++;
            }
        }
        
    
        var weight = equivalency / maxLength;
        return (weight * 100);
    }
}

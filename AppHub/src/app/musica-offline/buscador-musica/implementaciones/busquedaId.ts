import { ListaCancionesService } from "../../lista-canciones.service";
import { Implementacion } from "./implementacion";

export class BusquedaId implements Implementacion{

    constructor(private listaCanciones: ListaCancionesService){

    }

    buscar(valor: string): Array<any> {
        var coincidentes = new Array();
        this.listaCanciones.listaCanciones.forEach(element =>{
            if(this.similar(element.getId(), valor)>=25 || this.contiene(element.getId(), valor)){
                coincidentes.push(element)
            }
        })
        return coincidentes;
    }

    contiene(a: string, b: string){
        a = a.toLocaleLowerCase()
        b = b.toLocaleLowerCase()
        return a.includes(b)
    }
    similar(a: string, b: string) {
        a = a.toLocaleLowerCase()
        b = b.toLocaleLowerCase()
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

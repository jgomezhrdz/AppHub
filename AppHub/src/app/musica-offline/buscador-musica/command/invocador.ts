import { ArchivoMusica } from "../../archivo-musica";
import { ComandoDeshacer } from "./comando-deshacer";

export class Invocador {
    private comando !: ComandoDeshacer

    setComando(comando: ComandoDeshacer){
        this.comando = comando
    }
    
    ejecutarComando(){
        this.comando.ejecutar()
    }

    deshacerComando(){
        this.comando.deshacer()
    }

    rehacerComando(){
        this.comando.rehacer()
    } 

    setMusicaComando(archivoMusic: ArchivoMusica)
    {
        this.comando.setArchivoMusica(archivoMusic)
    }
}

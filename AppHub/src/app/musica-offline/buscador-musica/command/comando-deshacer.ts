import { ArchivoMusica } from "../../archivo-musica";
import { Command } from "./command";

export interface ComandoDeshacer extends Command {

    deshacer(): void
    rehacer(): void
    setArchivoMusica(musica: ArchivoMusica): void

}

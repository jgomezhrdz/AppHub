import { Usuario } from "src/app/usuario/usuario";

export interface Estrategia {
    ejecutar(usuario: Usuario): Promise<boolean>;
}

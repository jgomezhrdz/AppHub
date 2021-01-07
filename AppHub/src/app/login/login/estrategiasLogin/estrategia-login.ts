import { Usuario } from "src/app/usuario/usuario";

export interface EstrategiaLogin {
    ejecutar(usuario: Usuario): void;
}

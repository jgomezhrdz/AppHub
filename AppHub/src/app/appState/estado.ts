import { ControladorEstados } from "./controlador-estados";

export interface Estado {
    ejecutar(controlador: ControladorEstados): void;
}


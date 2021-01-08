import { Estado } from "./estado";
export class EstadoConInternet implements Estado{
    ejecutar(): void {
        throw new Error("Method not implemented.");
    }
}

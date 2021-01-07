import { Usuario } from "./usuario";

export class UsuarioComun extends Usuario{
    constructor(id:string, password:string){
        super(id, password);
    }
}

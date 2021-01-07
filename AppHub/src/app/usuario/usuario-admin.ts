import { Usuario } from "./usuario";

//Decorador del usuario regular de la aplicacion, puede descargar videos y musica
export class UsuarioAdmin extends Usuario{
    private user: Usuario;

    constructor(user: Usuario, id:string, password:string){
        super(id, password)
        this.user = user;
    }
    downloadVideo(){
    }
    
    downloadMusic(){
    }

}

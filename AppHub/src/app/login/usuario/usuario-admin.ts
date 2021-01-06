import { Usuario } from "./usuario";

//Decorador del usuario regular de la aplicacion, puede descargar videos y musica
export class UsuarioAdmin extends Usuario{
    private user: Usuario;
    
    constructor(user: Usuario, email: string){
        super(email);
        this.user = user;
    }
    downloadVideo(){
    }
    
    downloadMusic(){
    }

}

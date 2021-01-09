import { FachadaDescargaService } from "../youtube/servicios/fachada-descarga.service";
import { VideoYoutube } from "../youtube/video";
import { Usuario } from "./usuario";

//Decorador del usuario regular de la aplicacion, puede descargar videos y musica
export class UsuarioAdmin extends Usuario{
    private user: Usuario;

    constructor(user: Usuario, private fachada: FachadaDescargaService){
        super(user.id, user.password)
        this.user = user;
    }

    downloadVideo(video: VideoYoutube){
       this.fachada.downloadVideo(video)
    }
    
    downloadMusic(video: VideoYoutube){
        this.fachada.downloadMusic(video)
    }

}

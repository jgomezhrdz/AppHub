import { FachadaDescargaService } from "../youtube/servicios/fachada-descarga.service";
import { VideoYoutube } from "../youtube/video";
import { Usuario } from "./usuario";

export abstract class Decorator extends Usuario{
    private user: Usuario;

    constructor(user: Usuario, private fachada: FachadaDescargaService){
        super(user.id, user.password)
        this.user = user;
    }

    abstract downloadVideo(video: VideoYoutube): Promise<string>
    
    abstract downloadMusic(video: VideoYoutube): Promise<string>

}



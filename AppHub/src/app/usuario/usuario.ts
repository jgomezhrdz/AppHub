import { VideoYoutube } from "../youtube/video";

export class Usuario {
    id: string;
    password: string;
    constructor(id:string, password:string){
        this.id = id;
        this.password = password;
    }

    downloadVideo(video: VideoYoutube): Promise<string>{
        var vacio !: Promise<string>
        return vacio
    }
    
    downloadMusic(video: VideoYoutube):  Promise<string>{
        var vacio !: Promise<string>
        return vacio
    }

    clone(){
        return new Usuario(this.id, this.password)
    }
}

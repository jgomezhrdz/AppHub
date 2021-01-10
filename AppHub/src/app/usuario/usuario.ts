import { VideoYoutube } from "../youtube/video";

export class Usuario {
    id: string;
    password: string;
    constructor(id:string, password:string){
        this.id = id;
        this.password = password;
    }

    downloadVideo(video: VideoYoutube): void{
    }
    
    downloadMusic(video: VideoYoutube): void{
    }

    clone(){
        return new Usuario(this.id, this.password)
    }
}

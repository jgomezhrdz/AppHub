import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListaVideosService } from 'src/app/videos-offline/lista-videos.service';
import { Video } from 'src/app/videos-offline/video';
import { VideoYoutube } from '../video';

@Injectable({
  providedIn: 'root'
})
export class VideoDownloaderService {

  constructor(private http:HttpClient, private listaVideos: ListaVideosService) { }
  private async downloadFromServer(video: VideoYoutube): Promise<any>{
    return (await this.http.get("http://localhost:3000/download/video?url="+video.videoUrl+"&title="+video.title).toPromise())
  }
  async downloadVideo(video: VideoYoutube): Promise<string>{
    var peticion = this.downloadFromServer(video)
    
    var data = await peticion.then(
      data => {
        if(data.res == "OK"){
          var videoOff = new Video(video.title, video.videoId)
          this.listaVideos.añadirVideo(videoOff)
          return "Video descargado correctamente"
        }
        else{
          return "Error de descarga, es posible que no se pueda descargar"
        }
        
      },
      error => {
        console.log(error)
        return "Error de conexion: no se ha podido descargar"
      }      
    )
    return data
  }
}

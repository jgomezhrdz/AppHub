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
    return (await this.http.get("http://localhost:4000/download/video?url="+video.videoUrl+"&title="+video.title).toPromise())
  }
  async downloadVideo(video: VideoYoutube){
    var peticion = this.downloadFromServer(video)
    await peticion.then(data => {
      console.log(data)
      var videoOff = new Video(video.title, video.videoId)
      this.listaVideos.añadirVideo(videoOff)
    })
  }
}

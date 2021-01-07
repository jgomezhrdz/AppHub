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
  
  downloadVideo(video: VideoYoutube){
    const url: string = video.videoUrl;
    const title: string = video.title;
    this.http.get("http://localhost:4000/download/video?url="+url+"&title="+title)
    .subscribe(data => {console.log(data)})
    var videoOff = new Video(video.videoId, video.title)
    this.listaVideos.añadirVideo(videoOff)
  }
}

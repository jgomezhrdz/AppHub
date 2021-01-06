import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VideoYoutube } from './video';
import { Video } from '../videos-offline/video';
import { ListaVideosService } from '../videos-offline/lista-videos.service'
@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  private API_KEY = "AIzaSyB5is2OQmXbsuej06V3Uawi9NDzxTgZrLw"
  constructor(private http:HttpClient, private listaVideos: ListaVideosService) { 
  }

  getVideos(_keyWord: string): Observable<any>{
    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=+"+_keyWord+"&type=video&videoCaption=closedCaption&key="+this.API_KEY+""
    return this.http.get<any>(url)
  }
  downloadVideo(video: VideoYoutube, title:string){
    const url: string = video.videoUrl
    this.http.get("http://localhost:4000/download?URL="+url+"?name="+name)
    .subscribe(data => {console.log(data)})
    var videoOff = new Video(video.videoId, video.title)
    this.listaVideos.añadirVideo(videoOff)
  }
}

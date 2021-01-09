import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VideoYoutube } from '../video';
import { Video } from '../../videos-offline/video';
import { ListaVideosService } from '../../videos-offline/lista-videos.service'
@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  private API_KEY = "AIzaSyB5is2OQmXbsuej06V3Uawi9NDzxTgZrLw"
  private url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10"
  constructor(private http:HttpClient) { 
  }

  getUrl(){
    return this.url
  }

  getKey(){
    return this.API_KEY
  }
  
}

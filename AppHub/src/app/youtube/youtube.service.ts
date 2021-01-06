import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})

export class YoutubeService {
  private API_KEY = "AIzaSyB5is2OQmXbsuej06V3Uawi9NDzxTgZrLw"
  constructor(private http:HttpClient) { 
  }

  getVideos(_keyWord: string): Observable<any>{
    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=+"+_keyWord+"&type=video&videoCaption=closedCaption&key="+this.API_KEY+""
    return this.http.get<any>(url)
  }
  downloadVideo(url: string){
    this.http.get("http://localhost:4000/download?URL="+url)
    .subscribe(data => {console.log("Esto es una caca" + data)})
  }
}

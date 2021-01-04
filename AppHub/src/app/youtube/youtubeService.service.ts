import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  private API_KEY = "AIzaSyB5is2OQmXbsuej06V3Uawi9NDzxTgZrLw"
  constructor(private http:HttpClient) { 
  }

  getVideos(_keyWord: string): Observable<any>{
    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=+"+_keyWord+"&type=video&videoCaption=closedCaption&key="+this.API_KEY+""
    return this.http.get<any>(url)
  }
}

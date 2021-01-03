import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor() { 
    const API_KEY = "AIzaSyB5is2OQmXbsuej06V3Uawi9NDzxTgZrLw"
  }

  getVideos(_keyWord: string): Observable<any>{
    const url = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=+"+_keyWord+"&type=video&videoCaption=closedCaption&key={"+API_KEY+"}"
}

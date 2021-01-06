import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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
  downloadVideo(){
    const fs = require('fs')
    const youtubedl = require('youtube-dl')
    const video = youtubedl('http://www.youtube.com/watch?v=90AiXO1pAiA',
    video.pipe(fs.createWriteStream('myvideo.mp4'))
  }
}

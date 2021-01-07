import { Component, OnInit } from '@angular/core';
import { VideoYoutube } from '../video';
import { YoutubeService } from '../servicios/youtube.service';
import { VideoDownloaderService } from '../servicios/video-downloader.service';
import { MusicDownloaderService } from '../servicios/music-downloader.service';
import { Usuario } from 'src/app/usuario/usuario';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  activeUser !: Usuario;
  video !: VideoYoutube
  constructor(private videoDownloader: VideoDownloaderService, 
              private musicDownloader: MusicDownloaderService ) { }

  ngOnInit() {
    this.video = JSON.parse(sessionStorage.getItem('Video') as string) as VideoYoutube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
  }

  downloadVideo(){
    this.videoDownloader.downloadVideo(this.video);
  }

  downloadMusic(){
    this.musicDownloader.downloadMusic(this.video);
  }
}

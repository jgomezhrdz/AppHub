import { Injectable } from '@angular/core';
import { VideoYoutube } from '../video';
import { MusicDownloaderService } from './music-downloader.service';
import { VideoDownloaderService } from './video-downloader.service';

@Injectable({
  providedIn: 'root'
})
export class FachadaDescargaService {
  constructor(private videoDownloader: VideoDownloaderService, 
        private musicDownloader: MusicDownloaderService){}

    downloadVideo(video: VideoYoutube){
        this.videoDownloader.downloadVideo(video)
    }

    downloadMusic(video: VideoYoutube){
        this.musicDownloader.downloadMusic(video)
    }
}

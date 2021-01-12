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
        return this.videoDownloader.downloadVideo(video)
    }

    downloadMusic(video: VideoYoutube){
        return this.musicDownloader.downloadMusic(video)
    }
}

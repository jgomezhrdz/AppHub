import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ArchivoMusica } from 'src/app/musica-offline/archivo-musica';
import { ListaCancionesService } from 'src/app/musica-offline/lista-canciones.service';
import { VideoYoutube } from '../video';

@Injectable({
  providedIn: 'root'
})
export class MusicDownloaderService {

  constructor(private http:HttpClient, private listaCanciones: ListaCancionesService) { }

  downloadMusic(video: VideoYoutube){
    this.http.get("http://localhost:4000/download/music?url="+video.videoUrl+"&title="+video.title)
    .subscribe(data => {console.log(data)})
    var musica = new ArchivoMusica(video.title, video.videoId)
    this.listaCanciones.añadirCancion(musica)
  }
}

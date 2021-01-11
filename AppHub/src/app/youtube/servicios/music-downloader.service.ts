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

  private async downloadFromServer(video: VideoYoutube): Promise<any>{
    return (await this.http.get("http://localhost:4000/download/music?url="+video.videoUrl+"&title="+video.title).toPromise())
  }
  async downloadMusic(video: VideoYoutube){
    var peticion = this.downloadFromServer(video)
    await peticion.then(data => {
      console.log(data)
      var musica = new ArchivoMusica(video.title, video.videoId)
      this.listaCanciones.añadirCancion(musica)
    })

  }
}

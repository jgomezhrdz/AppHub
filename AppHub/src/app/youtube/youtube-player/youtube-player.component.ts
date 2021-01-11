import { Component, OnInit } from '@angular/core';
import { VideoYoutube } from '../video';
import { Usuario } from 'src/app/usuario/usuario';
import { FachadaPeticionesService } from 'src/app/db-connection/fachada-peticiones.service';
import { UsuarioAdmin } from 'src/app/usuario/usuario-admin';
import { UsuarioComun } from 'src/app/usuario/usuario-comun';
import { FachadaDescargaService } from '../servicios/fachada-descarga.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements OnInit {
  activeUser !: Usuario;
  private isActive = false;
  video !: VideoYoutube
  constructor(private fachadaDescarga: FachadaDescargaService,
              private fachada: FachadaPeticionesService ) { }

  async ngOnInit() {
    var userAux = JSON.parse(sessionStorage.getItem("Usuario") as string)
    this.video = JSON.parse(sessionStorage.getItem('Video') as string) as VideoYoutube
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag);
    this.activeUser = new UsuarioComun(userAux.id, userAux.password);
    await this.fachada.comprobarUsuario(this.activeUser.id).then(data => {
      //console.log(data)
      this.isActive = data
      if(this.isActive){
        this.activeUser = new UsuarioAdmin(this.activeUser, this.fachadaDescarga)
      }
    })
    
  }

  downloadVideo(){
    this.activeUser.downloadVideo(this.video)
  }

  downloadMusic(){
    this.activeUser.downloadMusic(this.video);
  }

  getActive(){
    return this.isActive
  }
}

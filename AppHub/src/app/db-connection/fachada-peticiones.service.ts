import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { PeticionesGuestService } from './peticiones-guest.service';
import { PeticionesUserService } from './peticiones-user.service';

@Injectable({
  providedIn: 'root'
})
export class FachadaPeticionesService {

  constructor(private peticionesUsuario: PeticionesUserService, private peticionesGuest: PeticionesGuestService) { }
  registrarUsuario(usuario: Usuario){
    this.peticionesUsuario.registrarUsuario(usuario);
  }

  comprobarUsuario(email: string){
    this.peticionesUsuario.comprobarUsuario(email);
  }

  inicioSesionUsuario(usuario: Usuario){
    this.peticionesUsuario.inicioSesionUsuario(usuario);
  }

  registrarUsuarioGuest(usuario: Usuario){
    this.peticionesGuest.registrarUsuario(usuario);
  }

  comprobarUsuarioGuest(email: string){
    this.peticionesGuest.comprobarUsuario(email);
  }

  inicioSesionUsuarioGuest(usuario: Usuario){
    this.peticionesGuest.inicioSesionUsuario(usuario);
  }

  getInstancia(){
    return this;
  }
}

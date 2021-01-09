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
    return this.peticionesUsuario.registrarUsuario(usuario);
  }

  comprobarUsuario(email: string){
    return this.peticionesUsuario.comprobarUsuario(email);
  }

  inicioSesionUsuario(usuario: Usuario){
    return this.peticionesUsuario.inicioSesionUsuario(usuario);
  }

  registrarUsuarioGuest(usuario: Usuario){
    return this.peticionesGuest.registrarUsuario(usuario);
  }

  comprobarUsuarioGuest(email: string){
    return this.peticionesGuest.comprobarUsuario(email);
  }

  inicioSesionUsuarioGuest(usuario: Usuario){
    return this.peticionesGuest.inicioSesionUsuario(usuario);
  }

}

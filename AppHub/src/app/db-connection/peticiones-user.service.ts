import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';
import { UsuarioComun } from '../usuario/usuario-comun';

@Injectable({
  providedIn: 'root'
})
export class PeticionesUserService {

  private url = "http://localhost:3000/api/users/"
  constructor(private http: HttpClient) { }

  async registrarUsuario(usuario: Usuario): Promise<any>{
    return (await this.http.post(this.url, {email: usuario.id, password: usuario.password}).toPromise())
  }

   async comprobarUsuario(email: string): Promise<any>{
    var presente = false;
    var extension = "exists?email="
    return (await this.http.get(this.url+extension+email).toPromise())
  }

  async inicioSesionUsuario(usuario: Usuario){
    var extension = "login?email="
    var extension2 = "&password="
    return await this.http.get<any>(this.url+extension+usuario.id+extension2+usuario.password).toPromise()
  }
}

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

  registrarUsuario(usuario: Usuario){
    this.http.post(this.url, {email: usuario.id, password: usuario.password}).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

   async comprobarUsuario(email: string): Promise<any>{
    var presente = false;
    var extension = "exists?email="
    return (await this.http.get(this.url+extension+email).toPromise())
  }

  inicioSesionUsuario(usuario: Usuario){
    var extension = "login?email="
    var extension2 = "&password="
    var correcto = false;
    this.http.get<any>(this.url+extension+usuario.id+extension2+usuario.password).subscribe(
      data => {console.log(data);
               sessionStorage.setItem("token", data.token);},
      error => console.log('oops', error)
    )
  }
}

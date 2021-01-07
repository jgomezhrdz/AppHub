import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';

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

  comprobarUsuario(email: string){
    var extension = "email?email="
    this.http.get(this.url+extension+email).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
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

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesUserService {

  private url = "localhost:3000/api/users/"
  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: UsuarioTipo){
    this.http.post(this.url, usuario)
  }

  comprobarUsuario(email: string){
    var extension = ":email?="
    this.http.get(this.url+extension+email).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

  inicioSesionUsuario(usuario: UsuarioTipo): boolean{
    var extension = ":email?="
    var correcto = false;
    this.http.get<UsuarioTipo>(this.url+extension+usuario.email).subscribe(
      data => { if(data.password == usuario.password) correcto =  true;
                else correcto = false;},
      error => console.log('oops', error)
    )
    return correcto
  }
}

export class UsuarioTipo{
  email:string;
  password:string;
  constructor(email:string, password:string){
    this.email = email;
    this.password = password;
  }
}
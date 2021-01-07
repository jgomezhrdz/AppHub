import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeticionesUserService {

    private url = "localhost:3000/api/guests/"
    constructor(private http: HttpClient) { }
  
    registrarUsuario(usuario: guestTipo){
      this.http.post(this.url, usuario)
    }
  
    comprobarUsuario(username: string){
      var extension = ":username?="
      this.http.get(this.url+extension+username).subscribe(
        data => console.log(data),
        error => console.log(error)
      )
    }
  
    inicioSesionUsuario(usuario: guestTipo): boolean{
      var extension = ":username?="
      var correcto = false;
      this.http.get<guestTipo>(this.url+extension+usuario.username).subscribe(
        data => { if(data.password == usuario.password) correcto =  true;
                  else correcto = false;},
        error => console.log('oops', error)
      )
      return correcto
    }
  }
  
  export class guestTipo{
    username:string;
    password:string;
    constructor(username:string, password:string){
      this.username = username;
      this.password = password;
    }
  }


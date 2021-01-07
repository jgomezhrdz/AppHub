import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class PeticionesGuestService {
  private url = "localhost:3000/api/guests/"
  constructor(private http: HttpClient) { }

  registrarUsuario(usuario: Usuario){
    this.http.post(this.url, usuario)
  }

  comprobarUsuario(username: string){
    var extension = ":username?="
    this.http.get(this.url+extension+username).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

  inicioSesionUsuario(usuario: Usuario): boolean{
    var extension = ":username?="
    var correcto = false;
    this.http.get<Usuario>(this.url+extension+usuario.id).subscribe(
      data => { if(data.password == usuario.password) correcto =  true;
                else correcto = false;},
      error => console.log('oops', error)
    )
    return correcto
  }
}



 

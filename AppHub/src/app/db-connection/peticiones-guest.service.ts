import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../usuario/usuario';

@Injectable({
  providedIn: 'root'
})
export class PeticionesGuestService {
  private url = "http://localhost:3000/api/guests/"
  constructor(private http: HttpClient) { }

  async registrarUsuario(usuario: Usuario): Promise<any>{
    return await this.http.post(this.url, {username: usuario.id, password: usuario.password}).toPromise()
  }
  comprobarUsuario(username: string){
    var extension = "exists?username="
    this.http.get(this.url+extension+username).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

  inicioSesionUsuario(usuario: Usuario){
    var extension = "login?username="
    var extension2 = "&password="
    var correcto = false;
    this.http.get<any>(this.url+extension+usuario.id+extension2+usuario.password).subscribe(
      data => { console.log(data);
                sessionStorage.setItem("token", data.token);
              },
      error => {
                console.log('oops', error)
              })
  }
}



 

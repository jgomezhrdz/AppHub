import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FachadaPeticionesService } from 'src/app/db-connection/fachada-peticiones.service';
import { Usuario } from 'src/app/usuario/usuario';
import { FactoriaEstrategiasLogin } from './estrategiasLogin/factoria-estrategias-login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private valor : number = 1
  id !: string;
  password !: string;
  private factorialogin = new FactoriaEstrategiasLogin(this.fachada)
  constructor(private router: Router, private fachada: FachadaPeticionesService) { }

  ngOnInit(): void {
  }

  async inicioSesion(){
    var usuario = new Usuario(this.id, this.password)
    var resultado = await this.factorialogin.crearEstrategia(this.valor).ejecutar(usuario)
    if(resultado){
      sessionStorage.setItem("Usuario", JSON.stringify(usuario))
    }
    else
      alert("El usuario o contraseña son erroneos, vuelva a intentarlo")
  }

  registro(){
    this.router.navigateByUrl("Register")
  }

  getValor(){
    return this.valor
  }

  setValor(valor: number){
    this.valor = valor
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FachadaPeticionesService } from 'src/app/db-connection/fachada-peticiones.service';
import { Usuario } from 'src/app/usuario/usuario';
import { FactoriaEstrategiasRegister } from './estrategiasRegistro/factoria-estrategias-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fachada: FachadaPeticionesService, private router: Router){}

  private valor : number = 1;
  usuarioDefault = new Usuario("juangh99@gmail.com", "*****")
  guestDefault = new Usuario("juangh99", "*****")
  private usuarioRegistro !: Usuario
  id !: string;
  password !: string;
  private factorialogin = new FactoriaEstrategiasRegister(this.fachada);

  ngOnInit(): void {
  }

  register(){
    if(this.valor==1){
      this.usuarioRegistro = this.usuarioDefault.clone()
    }
    else{
      this.usuarioRegistro = this.guestDefault.clone()
    }
    this.usuarioRegistro.id = this.id
    this.usuarioRegistro.password = this.password
    this.factorialogin.crearEstrategia(this.valor).ejecutar(this.usuarioRegistro);
    this.router.navigateByUrl("Login")
  }

  getValor(){
    return this.valor
  }

  setValor(valor: number){
    this.valor = valor
  }
}

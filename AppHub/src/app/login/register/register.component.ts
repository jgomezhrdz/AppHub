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
  id !: string;
  password !: string;
  private factorialogin = new FactoriaEstrategiasRegister(this.fachada);

  ngOnInit(): void {
  }

  register(){
    this.factorialogin.crearEstrategia(this.valor).ejecutar(new Usuario(this.id, this.password));
    this.router.navigateByUrl("Login")
  }

  getValor(){
    return this.valor
  }

  setValor(valor: number){
    this.valor = valor
  }
}

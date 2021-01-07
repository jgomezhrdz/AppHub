import { Component, OnInit } from '@angular/core';
import { FachadaPeticionesService } from 'src/app/db-connection/fachada-peticiones.service';
import { FactoriaEstrategiasRegister } from './estrategiasRegistro/factoria-estrategias-register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private fachada: FachadaPeticionesService){}

  private valor : number = 1;
  private id !: string;
  private password !: string;
  private factorialogin = new FactoriaEstrategiasRegister(this.fachada);

  ngOnInit(): void {
  }

  register(){
    
    this.factorialogin.crearEstrategia();
  }

  getValor(){
    return this.valor
  }

  setValor(valor: number){
    this.valor = valor
  }
}

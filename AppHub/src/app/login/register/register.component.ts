import { Component, OnInit } from '@angular/core';
import { FactoriaLogin } from './factoria-login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  private valor : number = 1
  private factorialogin = new FactoriaLogin();
  constructor() { }

  ngOnInit(): void {
  }

  register(){

  }

  getValor(){
    return this.valor
  }

  setValor(valor: number){
    this.valor = valor
  }
}

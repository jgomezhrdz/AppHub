import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private valor : number = 1

  constructor(private router: Router) { }

  ngOnInit(): void {
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

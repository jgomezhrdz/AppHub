import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import {YoutubeService} from './youtube/servicios/youtube.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck, OnInit{
  title = 'AppHub';
  sesionIniciada = false;
  constructor(private router: Router){}
  ngOnInit(): void {
    sessionStorage.removeItem("token")
  }
  ngDoCheck(): void {
    if(sessionStorage.getItem("token") != null && this.router.url === "/Login"){
      this.sesionIniciada = true;
      this.router.navigateByUrl("/YoutubeSearch")
    }
    else if(sessionStorage.getItem("token") == null && this.router.url != "/Login"){
      console.log(this.router.url)
      this.router.navigateByUrl("Login")
    }  
  }
}

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
    
  }
}

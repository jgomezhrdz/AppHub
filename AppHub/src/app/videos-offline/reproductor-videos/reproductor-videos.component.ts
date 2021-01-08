import { Component, OnInit } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'app-reproductor-videos',
  templateUrl: './reproductor-videos.component.html',
  styleUrls: ['./reproductor-videos.component.css']
})
export class ReproductorVideosComponent implements OnInit {

  videoActual !: Video;
  constructor() { }

  ngOnInit(): void {
    console.log(this.videoActual)
    var aux = (JSON.parse(sessionStorage.getItem("videoOff") as string))
    this.videoActual = new Video(aux.title, aux.id)
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorVideosComponent } from './buscador-videos/buscador-videos.component';
import { ReproductorVideosComponent } from './reproductor-videos/reproductor-videos.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BuscadorVideosComponent, ReproductorVideosComponent],
  imports: [
    CommonModule,
    FormsModule      
  ]
})
export class VideosOfflineModule { }

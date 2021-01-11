import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BuscadorMusicaComponent } from './buscador-musica/buscador-musica.component';
import { ReproductorMusicaComponent } from './reproductor-musica/reproductor-musica.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [BuscadorMusicaComponent, ReproductorMusicaComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MusicaOfflineModule { }

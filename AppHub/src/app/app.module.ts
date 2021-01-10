import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { YoutubeModule } from './youtube/youtube.module';
import { FormsModule } from '@angular/forms';
import { VideosOfflineModule } from './videos-offline/videos-offline.module';
import { MusicaOfflineModule } from './musica-offline/musica-offline.module';
import { DbConnectionModule } from './db-connection/db-connection.module';
import { LoginModule } from './login/login.module';
import { FachadaPeticionesService } from './db-connection/fachada-peticiones.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    YoutubeModule,
    VideosOfflineModule,
    MusicaOfflineModule,
    LoginModule,
    FormsModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    DbConnectionModule,
  ],
  providers: [FachadaPeticionesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

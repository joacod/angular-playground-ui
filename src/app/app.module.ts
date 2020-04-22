import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LyricsModule } from './lyrics/lyrics.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LyricsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

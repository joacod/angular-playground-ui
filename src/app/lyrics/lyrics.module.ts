import { NgModule } from '@angular/core';
import { LyricsComponent } from './lyrics.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LyricsComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    LyricsComponent
  ]
})
export class LyricsModule { }

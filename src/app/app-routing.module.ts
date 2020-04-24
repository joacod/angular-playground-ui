import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LyricsComponent } from './lyrics/lyrics.component';


const routes: Routes = [
  { path: 'lyrics', component: LyricsComponent },
  { path: '', redirectTo: 'lyrics', pathMatch: 'full' },
  { path: '**', redirectTo: 'lyrics', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

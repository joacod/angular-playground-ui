import { Component, OnInit } from '@angular/core';
import { LyricsService} from '../services/lyrics.service'
import { ISongLyrics } from './songLyrics';

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {

  lyrics: ISongLyrics;
  errorMessage = '';

  constructor(private lyricsService: LyricsService) {
  }

  ngOnInit(): void {
    this.lyricsService.getLyrics('beatles', 'come%20together').subscribe({
      next: response => {
        this.lyrics = response;
      },
      error: err => this.errorMessage = err
    });
  }

}

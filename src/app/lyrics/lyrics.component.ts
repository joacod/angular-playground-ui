import { Component, OnInit } from '@angular/core';
import { LyricsService} from '../services/lyrics.service'
import { ISongLyrics } from './songLyrics';
import { HttpErrorResponse } from '@angular/common/http';
import { MatProgressButtonOptions } from 'mat-progress-buttons'

@Component({
  selector: 'app-lyrics',
  templateUrl: './lyrics.component.html',
  styleUrls: ['./lyrics.component.scss']
})
export class LyricsComponent implements OnInit {

  lyrics: ISongLyrics;
  artist: string = 'beatles';
  song: string = 'come together';
  errorMessage: HttpErrorResponse;
  showLyrics: boolean = false;
  spinnerButtonOptions: MatProgressButtonOptions = {
    active: false,
    text: 'Search',
    spinnerSize: 18,
    raised: true,
    stroked: false,
    buttonColor: 'primary',
    spinnerColor: 'accent',
    fullWidth: false,
    disabled: false,
    mode: 'indeterminate',
    buttonIcon: {
      fontIcon: 'search'
    }
  };


  constructor(private lyricsService: LyricsService) {
    this.lyrics = {
      Artist: '',
      SongTitle: '',
      Lyrics: ''
    }
  }

  ngOnInit(): void {
  }

  onsearchLyrics(): void {
    this.spinnerButtonOptions.active = true;
    this.lyricsService.getLyrics(this.artist, this.song).subscribe({
      next: response => {
        this.lyrics = response;
        this.showLyrics = true;
        this.spinnerButtonOptions.active = false;
      },
      error: err => {
        this.errorMessage = err;
        this.showLyrics = false;
        this.spinnerButtonOptions.active = false;
      }
    });
  }

}

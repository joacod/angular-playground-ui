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
  artist: string = 'beatles';
  song: string = 'come together';
  errorMessage = '';

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
    this.lyricsService.getLyrics(this.artist, this.song).subscribe({
      next: response => {
        this.lyrics = response;
      },
      error: err => this.errorMessage = err
    });
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ISongLyrics } from '../lyrics/songLyrics';

@Injectable({
  providedIn: 'root'
})
export class LyricsService {

  constructor(private http: HttpClient) {
  }

  // .Net Core Web API
  private lyricsUrl = 'https://localhost:44309/api/v1/lyrics/';

  // Go Web API
  //private lyricsUrl = 'http://localhost:8080/api/v1/lyrics/';

  getLyrics(): Observable<ISongLyrics> {
    return this.http.get<ISongLyrics>(this.lyricsUrl + 'beatles' + '/' + 'come%20together');
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie } from './common/types';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  constructor(private http: HttpClient) {}

  private apiURL: string =
    'https://api.themoviedb.org/3/movie/popular?api_key=34c209805562a7c2886a8bb152caa4c0&language=en-US&page=1';

  getMovies(): Observable<Movie[]> {
    return this.http
      .get<Movie[]>(this.apiURL)
      .pipe(map((movies: any) => movies['results']));
  }
}

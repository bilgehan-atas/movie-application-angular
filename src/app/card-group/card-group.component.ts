import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../common/types';

@Component({
  selector: 'app-card-group',
  templateUrl: './card-group.component.html',
  styleUrls: ['./card-group.component.scss'],
})
export class CardGroupComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  getMovies(): void {
    this.moviesService
      .getMovies()
      .subscribe((movies) => (this.movies = movies.slice(8)));
  }

  ngOnInit(): void {
    this.getMovies();
  }
}

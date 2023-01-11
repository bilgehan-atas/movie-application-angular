import { Component, Input } from '@angular/core';
import { MoviesService } from '../movies.service';
import { Movie } from '../common/types';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
export class CarouselComponent {
  slides: Movie[] = [];

  currentIndex: number = 0;
  getCurrentSlideURL(): string {
    return `url("https://image.tmdb.org/t/p/original${
      this.slides[this.currentIndex].backdrop_path
    }")`;
  }

  goToNext(): void {
    const isLast = this.currentIndex === this.slides.length - 1;
    const nextIndex = isLast ? 0 : this.currentIndex + 1;
    this.currentIndex = nextIndex;
  }

  goToPrevious(): void {
    const isFirst = this.currentIndex === 0;
    const previousIndex = isFirst
      ? this.slides.length - 1
      : this.currentIndex - 1;
    this.currentIndex = previousIndex;
  }
  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  constructor(private moviesService: MoviesService) {}

  getMovies(): void {
    this.moviesService
      .getMovies()
      .subscribe((movies) => (this.slides = movies.slice(0, 8)));
  }

  ngOnInit(): void {
    this.getMovies();
  }
}

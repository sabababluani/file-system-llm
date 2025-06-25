import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movie } from '../entities/movie.entity';

@Injectable()
export class MoviesRepository {
  constructor(
    @InjectRepository(Movie) private movieRepository: Repository<Movie>,
  ) {}

  
}

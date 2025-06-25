import { Controller, Post, Body } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  analyzePrompt(@Body() body: { prompt: string }) {
    return this.moviesService.analyzePrompt(body.prompt);
  }
}

import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {

    constructor(private readonly moviesService: MoviesService){}

    @Get()
    getAll(): Movie[]{
        return this.moviesService.getAll();
    }

    // @Get('search')
    // search(@Query('year') searchingYear: string){
    //     return `We are searching for a movie made after: ${searchingYear}`;
    // }

    @Get(":id")
    getOne(@Param('id') movieId:number): Movie{
        return this.moviesService.getOne(movieId);
    }

    @Post()
    create(@Body() movieData: CreateMovieDto){
        return this.moviesService.createOne(movieData);
    }

    @Delete(':id')
    remove(@Param('id') movieId:number) {
        return this.moviesService.deleteOne(movieId);
    }

    @Patch(':id')
    patch(@Param('id') movieId: number, @Body() updateData){
        return this.moviesService.update(movieId, updateData);
    }
}

import { Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
    @Get()
    getAll(): string{
        return "This will retuns all movies";
    }

    @Get("/:id")
    getOne(@Param('id') movieId:string): string{
        return `This will return one movie with the id : ${movieId}`;
    }

    @Post('/:id')
    create(@Param('id') movieId:string): string{
        return `This will create a movie with the id : ${movieId}`;
    }

    @Delete('/:id')
    remove(@Param('id') movieId:string): string{
        return `This will delete a movie with the id : ${movieId}`;
    }

    @Patch('/:id')
    patch(@Param('id') movieId: string): string{
        return `This will patch a movie with the id : ${movieId}`;
    }
}

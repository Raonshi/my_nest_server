import { NotFoundException } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

describe('MoviesService', () => {
  let service: MoviesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MoviesService],
    }).compile();

    service = module.get<MoviesService>(MoviesService);
  });

  describe('getAll', () => {
    it('should be return an array', () => {
      const result = service.getAll();
      expect(result).toBeInstanceOf(Array);
    });
  });

  describe('getOne', () => {
    it('should be return a movie', () => {
      service.createOne({
        title: 'Test Movie',
        genres: ['test genres'],
        year: 2022,
      });
      const result = service.getOne(1);
  
      expect(result).toBeDefined();
      expect(result.id).toEqual(1);
    });
  
    it('should throw 404 error', () => {
      try{
       const result = service.getOne(999);
      }catch(e){
        expect(e).toBeInstanceOf(NotFoundException);
        expect(e.message).toEqual(`Movie with ID: 999 not found.`);
      }
    });
    
  });

  // describe('deleteOne', () => {
  //   it('should be return an array', () => {
  //     service.createOne({
  //       title: 'Test Movie',
  //       genres: ['test genres'],
  //       year: 2022,
  //     });

  //     const result = service.getOne(1);

  //     expect(result).toBeInstanceOf(Array);
  //   });
  // });
});
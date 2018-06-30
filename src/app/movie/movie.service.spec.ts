import { TestBed, inject } from '@angular/core/testing';

import { Movie\movieService } from './movie\movie.service';

describe('Movie\movieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Movie\movieService]
    });
  });

  it('should be created', inject([Movie\movieService], (service: Movie\movieService) => {
    expect(service).toBeTruthy();
  }));
});

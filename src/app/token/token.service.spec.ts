import { TestBed, inject } from '@angular/core/testing';

import { Token\tokenService } from './token\token.service';

describe('Token\tokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Token\tokenService]
    });
  });

  it('should be created', inject([Token\tokenService], (service: Token\tokenService) => {
    expect(service).toBeTruthy();
  }));
});

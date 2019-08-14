import { TestBed } from '@angular/core/testing';

import { DeezerServiceService } from './deezer-service.service';

describe('DeezerServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeezerServiceService = TestBed.get(DeezerServiceService);
    expect(service).toBeTruthy();
  });
});

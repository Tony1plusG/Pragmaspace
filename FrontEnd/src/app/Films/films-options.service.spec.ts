import { TestBed } from '@angular/core/testing';

import { FilmsOptionsService } from './films-options.service';

describe('FilmsOptionsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FilmsOptionsService = TestBed.get(FilmsOptionsService);
    expect(service).toBeTruthy();
  });
});

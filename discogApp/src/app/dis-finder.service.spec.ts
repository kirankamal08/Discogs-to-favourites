import { TestBed } from '@angular/core/testing';

import { DisFinderService } from './dis-finder.service';

describe('DisFinderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisFinderService = TestBed.get(DisFinderService);
    expect(service).toBeTruthy();
  });
});

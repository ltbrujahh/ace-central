import { TestBed } from '@angular/core/testing';

import { NavmanService } from './navman.service';

describe('NavmanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NavmanService = TestBed.get(NavmanService);
    expect(service).toBeTruthy();
  });
});

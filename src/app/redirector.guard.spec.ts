import { TestBed, async, inject } from '@angular/core/testing';

import { RedirectorGuard } from './redirector.guard';

describe('RedirectorGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RedirectorGuard]
    });
  });

  it('should ...', inject([RedirectorGuard], (guard: RedirectorGuard) => {
    expect(guard).toBeTruthy();
  }));
});

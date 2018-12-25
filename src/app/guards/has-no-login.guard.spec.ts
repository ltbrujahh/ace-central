import { TestBed, async, inject } from '@angular/core/testing';

import { HasNoLoginGuard } from './has-no-login.guard';

describe('HasNoLoginGuard', () =>
{
    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            providers: [HasNoLoginGuard]
        });
    });

    it('should ...', inject([HasNoLoginGuard], (guard: HasNoLoginGuard) =>
    {
        expect(guard).toBeTruthy();
    }));
});

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HasNoLoginGuard implements CanActivate
{
    constructor(
        private router: Router,
        private authService: AuthenticationService
    ) { }

    canActivate: (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<boolean> | Promise<boolean> | boolean = this.checkActivation;
    canLoad: (route: Route, segments: UrlSegment[]) => Observable<boolean> | Promise<boolean> | boolean = this.checkActivation;

    private checkActivation(): Observable<boolean> | Promise<boolean> | boolean
    {
        const canDo = !this.authService.isLoggedIn;

        if (!canDo)
        {
            this.router.navigate(['/home']);
        }

        return canDo;
    }
}

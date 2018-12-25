import { Injectable } from '@angular/core';
// tslint:disable-next-line:max-line-length
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';
import { NavmanService } from '@services/navman.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HasLoginGuard implements CanActivate, CanActivateChild, CanLoad
{
    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private navman: NavmanService
    ) { }

    // tslint:disable-next-line:max-line-length
    canActivate: (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<boolean> | Promise<boolean> | boolean = this.checkActivation;
    // tslint:disable-next-line:max-line-length
    canActivateChild: (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<boolean> | Promise<boolean> | boolean = this.checkActivation;
    canLoad: (route: Route, segments: UrlSegment[]) => Observable<boolean> | Promise<boolean> | boolean = this.checkActivation;

    private checkActivation(): Observable<boolean> | Promise<boolean> | boolean
    {
        return this.authService.isLoggedIn()
            .then(loggedIn =>
            {
                const canDo = loggedIn;
                if (!canDo)
                {
                    this.router.navigate([this.navman.toLogin()]);
                }

                return canDo;
            });
    }
}

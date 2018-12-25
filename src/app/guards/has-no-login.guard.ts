import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';
import { NavmanService } from '@services/navman.service';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class HasNoLoginGuard implements CanActivate
{
    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private navman: NavmanService
    ) { }

    canActivate: (next: ActivatedRouteSnapshot, state: RouterStateSnapshot) => Observable<boolean> | Promise<boolean> | boolean = this.checkActivation;
    canLoad: (route: Route, segments: UrlSegment[]) => Observable<boolean> | Promise<boolean> | boolean = this.checkActivation;

    private checkActivation(): Observable<boolean> | Promise<boolean> | boolean
    {
        return this.authService.isLoggedIn()
            .then(loggedIn =>
            {
                const canDo = !loggedIn;
                if (!canDo)
                {
                    this.router.navigate([this.navman.toHome()]);
                }

                return canDo;
            })
    }
}

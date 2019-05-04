import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RedirectorGuard implements CanActivate
{
    constructor(private router: Router) { }

    // tslint:disable-next-line:max-line-length
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
        const data = route.data as RedirectorGuardData;

        // HACK its meant to check if the end route is equals the route this guard is attached to.
        const canDo = !state.url.endsWith(state.root.children[0].url[0].path);

        if (!canDo)
        {
            console.warn(`redirecting to ${state.url}/${data.to}`);
            this.router.navigate([state.url, data.to]);
        }

        return canDo;
    }
}

export interface RedirectorGuardData
{
    to: string;
}

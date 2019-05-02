import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RedirectorGuard implements CanActivate
{
    constructor(private router: Router, private route: ActivatedRoute) { }

    // tslint:disable-next-line:max-line-length
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
    {
        const data = route.data as RedirectorGuardData;

        // TODO grr its not working
        // this.router.navigate([data.to], { relativeTo: this.route });

        return true;
    }
}

export interface RedirectorGuardData
{
    to: string;
}

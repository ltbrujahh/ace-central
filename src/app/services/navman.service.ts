import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavmanService
{

    constructor() { }

    toRoot = (): string => '/';
    toHome = (): string => '/home';
    toLogin = (): string => '/login';
}

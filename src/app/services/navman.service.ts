import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class NavmanService
{

    constructor() { }

    toHome = (): string => '/home';
    toLogin = (): string => '/login';
}

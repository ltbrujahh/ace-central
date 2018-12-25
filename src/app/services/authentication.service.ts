import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService
{
    get isLoggedIn(): boolean
    {
        return true;
    }

    constructor() { }
}

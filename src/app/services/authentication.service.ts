import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService
{
    private readonly USER_KEY = 'auth-user';

    private _user: User;

    get user(): Promise<User>
    {
        if (this._user === undefined)
        {
            // cache the user in memory so we dont have to keep getting it. 
            this.storage
                .get(this.USER_KEY)
                .then(user => this._user = user);
        }

        return Promise.resolve(this._user);
    }

    constructor(private storage: Storage) { }

    async isLoggedIn(): Promise<boolean>
    {
        return (await this.user) !== undefined;
    }
}

interface User
{
    token: string;
}

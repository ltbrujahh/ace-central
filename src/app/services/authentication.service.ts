import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService
{
    private readonly USER_KEY = 'auth-user';

    private _user: User;
    private get user(): User | Promise<User>
    {
        if (this._user === undefined)
        {
            // cache the user in memory so we dont have to keep getting it. 
            this.storage
                .get(this.USER_KEY)
                .then(user => this._user = user);
        }

        return this._user;
    }

    constructor(private storage: Storage) { }

    isLoggedIn(): boolean | Promise<boolean>
    {
        let user = this.user;

        if (user instanceof Promise)
        {
            user.then(user =>
            {
                return user !== undefined;
            });
        }

        return user !== undefined;
    }
}

interface User
{
    token: string;
}

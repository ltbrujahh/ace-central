import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService
{
    private readonly USER_KEY = 'auth-user';

    private _user: User;

    // TODO: there should be a better way of doing this...
    get user(): Promise<User>
    {
        if (this._user) { return Promise.resolve(this._user); }

        console.log('grabbing user from storage...');
        return this.storage
            .get(this.USER_KEY)
            .then(user =>
            {
                console.log('found user', user);

                if (user)
                {
                    // cache the user in memory so we dont have to keep getting it.
                    this._user = user;
                }

                return this._user;
            });
    }

    constructor(private storage: Storage) { }

    async isLoggedIn(): Promise<boolean>
    {
        console.log('checking is logged in...');
        return (await this.user) !== undefined;
    }

    async login(): Promise<User>
    {
        console.log('trying to login...');
        return this.storage
            .set(this.USER_KEY, { token: 'test-token' } as User)
            .then(value =>
            {
                console.log('logged in with', value);
                return value;
            });
    }

    async logout(): Promise<any>
    {
        console.log('logging out user...');
        return this.storage
            .remove(this.USER_KEY)
            // clear from memory as well
            .then(_ => this._user = undefined);
    }
}

interface User
{
    token: string;
}

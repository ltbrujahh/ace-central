import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';
import { NavmanService } from '@services/navman.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit
{

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private navman: NavmanService
    ) { }

    ngOnInit()
    {
    }

    async login($event: Event): Promise<void>
    {
        // TODO: add a twirly
        await this.authService.login();
        const path = this.navman.toHome();
        console.log('navigating to', path);
        this.router.navigate([path]);
    }
}

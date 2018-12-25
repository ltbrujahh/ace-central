import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '@services/authentication.service';
import { NavmanService } from '@services/navman.service';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit
{

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private navman: NavmanService
    ) { }

    ngOnInit(): void
    {
    }

    async logout(): Promise<void>
    {
        await this.authService.logout();
        const url = this.navman.toRoot();
        console.log('navigating to', url);
        this.router.navigate([url]);
    }
}

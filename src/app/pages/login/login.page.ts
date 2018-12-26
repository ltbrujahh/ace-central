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
    readonly sliderOpts: any;
    readonly slides: Slide[];

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private navman: NavmanService
    )
    {
        this.sliderOpts = {
            autoplay: {
                delay: 4000
            }
        };

        this.slides = [
            { heading: 'Christmas Service 2018', subtitle: '' },
            { heading: 'Welcome back 2019', subtitle: 'First service for 2019!' },
            { heading: 'Mothers Day', subtitle: 'For all the mothers of our church' },
        ];
    }

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

interface Slide
{
    heading: string;
    subtitle: string;
}

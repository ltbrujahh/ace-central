import { Component, OnInit, ViewChild } from '@angular/core';
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

    @ViewChild('promoVideo') readonly video: HTMLVideoElement;

    constructor(
        private router: Router,
        private authService: AuthenticationService,
        private navman: NavmanService
    )
    {

    }

    ngOnInit()
    {
        this.router.navigate([this.navman.toLoginLanding()]);
    }

    onPromoVideoLoadStart($event: any): void
    {
        console.log('loading video...', $event);
    }

    onProgress($event: Event): void
    {
        const video = $event.target as HTMLVideoElement;
        const buffered = video.buffered.length > 0
            ? video.buffered.end(video.buffered.length - 1)
            : video.buffered;
        console.log('video progress...', $event, 'with buffered', buffered);
    }

    onError($event: any): void 
    {
        console.error('on Error video', $event);
    }

    async login($event: Event): Promise<void>
    {
        // TODO: add a twirly
        await this.authService.login();
        const path = this.navman.toHome();
        console.log('navigating to', path);
        this.router.navigate([path]);
    }

    goToRegistration(): void
    {
        this.router.navigate([this.navman.toLoginRegistration()]);
    }
}


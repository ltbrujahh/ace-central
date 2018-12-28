import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.page.html',
    styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit
{
    readonly sliderOpts: any;
    readonly slides: Slide[];
    constructor()
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

}

interface Slide
{
    heading: string;
    subtitle: string;
}

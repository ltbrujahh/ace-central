import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-dailydev',
    templateUrl: './dailydev.component.html',
    styleUrls: ['./dailydev.component.scss'],
})
export class DailydevComponent implements OnInit
{
    verse_of_the_day;
    output;
    votd_image_url;
    votd_verse;
    votd_content;

    constructor() { }

    ngOnInit()
    {
        // TODO: https://yv-public-api-docs.netlify.com/api/votd.html#get-a-single-verse-of-the-day-item
        // we need to replace the day of the year with the current day that the app opens it at!
        fetch(
            'https://developers.youversionapi.com/1.0/verse_of_the_day/1?version_id=1', {
                headers: {
                    'X-YouVersion-Developer-Token': 'UJjjJiiLXpQfl-M1goC8_NFWeik',
                    'Accept-Language': 'en',
                    Accept: 'application/json',
                }
            })
            .then((result) => result.json())
            .then((json) =>
            {
                console.log(json);
                this.verse_of_the_day = json;
                this.votd_image_url = json.image.url;
                this.votd_verse = json.verse.human_reference;
                this.votd_content = json.verse.text;
                console.log(this.votd_image_url)
            })
    }

}



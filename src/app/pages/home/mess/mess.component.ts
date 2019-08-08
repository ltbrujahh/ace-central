import { Component, OnInit } from '@angular/core';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { AlertController, LoadingController, Platform } from '@ionic/angular';

@Component({
    selector: 'ace-mess',
    templateUrl: './mess.component.html',
    styleUrls: ['./mess.component.scss'],
})
export class MessComponent implements OnInit
{
    messages: Message[];

    constructor(
        private platform: Platform,
        private socialSharing: SocialSharing,
        private alertController: AlertController,
        private loadingController: LoadingController
    ) { }

    ngOnInit()
    {
        // TODO: we need to replace this with a provider service to abstract it out from this component in preparation for an API call to a db
        this.messages = [
            {
                speakerName: 'Ps William Law',
                title: 'The sword of all Truths',
                synopsis: `Playing WoW all the time made him see the light`,
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa dignissimos eaque
                dolor expedita, cumque architecto ex obcaecati omnis quae delectus consequatur. Laborum
                officiis voluptas eaque neque voluptatibus nihil perferendis!`
            },
            {
                speakerName: 'Ps Christopher Lee',
                title: 'The Armour of God',
                synopsis: `Playing WoW all the time made him see the light`,
                // content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa dignissimos eaque
                // dolor expedita, cumque architecto ex obcaecati omnis quae delectus consequatur. Laborum
                // officiis voluptas eaque neque voluptatibus nihil perferendis!`
                content: `test123`
            },
            {
                speakerName: 'Ps Jhon Halim',
                title: 'New Genesis',
                synopsis: `Playing WoW all the time made him see the light`,
                content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores culpa dignissimos eaque
                dolor expedita, cumque architecto ex obcaecati omnis quae delectus consequatur. Laborum
                officiis voluptas eaque neque voluptatibus nihil perferendis!`
            }
        ];
    }

    async onShareClicked($event: Event): Promise<void>
    {
        const loading = await this.loadingController.create({
            message: 'Please wait...',
            // translucent: true,
            // cssClass: 'custom-class custom-loading'
        });
        await loading.present();

        if (this.platform.is('cordova'))
        {
            await this.shareViaEmail(loading);
        }
        else
        {
            await loading.dismiss();
            console.log('clicked the share button with event', $event);
        }
    }

    private async shareViaEmail(loading: HTMLIonLoadingElement): Promise<void>
    {
        let canDo: boolean;

        try
        {
            canDo = await this.socialSharing.canShareViaEmail();
        } catch (err)
        {
            await loading.dismiss();
            console.error('error during canShareViaEmail', err);
            const alert = await this.alertController.create({
                header: 'FAIL',
                subHeader: 'Subtitle',
                message: 'This is an alert message.',
                buttons: ['OK']
            });
            await alert.present();
        }

        if (canDo)
        {
            await loading.dismiss();

            try
            {
                await this.socialSharing.shareViaEmail('Body', 'Subject', ['recipient@example.org']);
            } catch (err)
            {
                const failAlert = await this.alertController.create({
                    header: 'Fail on sharing via email',
                    subHeader: 'Subtitle',
                    message: err,
                    buttons: ['OK']
                });
                await failAlert.present();
            }
        }
    }
}

interface Message
{
    speakerName: string;
    title: string;
    synopsis: string;
    content: string;
}

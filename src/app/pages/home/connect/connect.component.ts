import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ConnectModalComponent } from './connect-modal/connect-modal.component';
import { ConnectGroup } from './connect.model';

@Component({
    selector: 'ace-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent implements OnInit
{
    connectGroups: ConnectGroup[];
    constructor(
        private modalCtrl: ModalController,
    ) { }

    ngOnInit()
    {

        this.connectGroups = [
            {
                name: 'Young Mens',
                description: 'bunch of men test description',
            },

            {
                name: 'Young Womens',
                description: 'Voluptate qui elit eu consequat',
            },

            {
                name: 'Young Couples',
                description: 'Voluptate qui elit eu consequat',
            },

            {
                name: 'Young Families',
                description: 'Voluptate qui elit eu consequat',
            },

            {
                name: 'Board Games',
                description: 'Voluptate qui elit eu consequat',
            },

            {
                name: 'Sports',
                description: 'Voluptate qui elit eu consequat',
            },
        ];
    }

    async goToConnectModal(): Promise<void>
    {
        return this.modalCtrl
            .create({ component: ConnectModalComponent })
            .then(modalEl => modalEl.present());
    }
}

import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
<<<<<<< HEAD
import { ModalController } from '@ionic/angular';
import { ConnectModalComponent } from './connect-modal/connect-modal.component';
import { ConnectGroup } from './connect.model';


=======

import { ConnectGroup } from './connect.model';
>>>>>>> parent of 3349472... added connectModal
=======

import { ConnectGroup } from './connect.model';
>>>>>>> parent of 3349472... added connectModal

@Component({
    selector: 'ace-connect',
    templateUrl: './connect.component.html',
    styleUrls: ['./connect.component.scss'],
})
export class ConnectComponent implements OnInit
{
    connectGroups: ConnectGroup[];
<<<<<<< HEAD

<<<<<<< HEAD
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
=======
=======

>>>>>>> parent of 3349472... added connectModal
  constructor() { }

  ngOnInit() {

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
<<<<<<< HEAD
>>>>>>> parent of 3349472... added connectModal
=======
>>>>>>> parent of 3349472... added connectModal
}

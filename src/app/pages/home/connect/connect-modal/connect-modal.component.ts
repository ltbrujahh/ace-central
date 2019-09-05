import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-connect-modal',
    templateUrl: './connect-modal.component.html',
    styleUrls: ['./connect-modal.component.scss'],
})
export class ConnectModalComponent implements OnInit
{

    constructor(private modalController: ModalController) { }

    ngOnInit() { }

    async dismiss(): Promise<void>
    {
        return this.modalController.dismiss();
    }
}

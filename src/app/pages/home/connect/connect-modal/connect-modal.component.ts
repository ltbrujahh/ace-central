import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
    selector: 'app-connect-modal',
    templateUrl: './connect-modal.component.html',
    styleUrls: ['./connect-modal.component.scss'],
})
export class ConnectModalComponent implements OnInit {
  @Input() 

  constructor(private modalCtrl: ModalController) { }

    ngOnInit() { }

  dismiss() {
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }
}

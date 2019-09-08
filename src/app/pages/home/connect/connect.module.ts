import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ConnectModalComponent } from './connect-modal/connect-modal.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule,
    ],
    declarations: [ConnectModalComponent],
    entryComponents: [ConnectModalComponent],
})
export class ConnectModule { }

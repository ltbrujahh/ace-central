import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { AppComponent } from './../../../app.component';
import { AppRoutingModule } from './../../../app-routing.module';
import { ConnectModalComponent } from './connect-modal/connect-modal.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        IonicModule,
    ],
    declarations: [ConnectModalComponent],
    entryComponents: [AppComponent, ConnectModalComponent]
})
export class ConnectModule {}

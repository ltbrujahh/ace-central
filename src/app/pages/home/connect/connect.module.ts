import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AppRoutingModule } from './../../../app-routing.module';
import { AppComponent } from './../../../app.component';
import { ConnectModalComponent } from './connect-modal/connect-modal.component';

@NgModule({
    imports: [
        CommonModule,
        AppRoutingModule,
        IonicModule,
    ],
    declarations: [ConnectModalComponent],
    entryComponents: [AppComponent],
    exports: [ConnectModalComponent]
})
export class ConnectModule { }

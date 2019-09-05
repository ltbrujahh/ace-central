import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConnectModalComponent } from './connect/connect-modal/connect-modal.component';
import { ConnectComponent } from './connect/connect.component';
import { DailydevComponent } from './dailydev/dailydev.component';
import { ConnectModule } from './connect/connect.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      },
      {
        path: 'messages',
        component: MessComponent
      },
      {
        path: 'connect',
        component: ConnectComponent
      },
      {
        path: 'dailydev',
        component: DailydevComponent
      }
    ])
  ],
  declarations: [HomePage, MessComponent, ConnectComponent, DailydevComponent]
})
export class HomePageModule { }

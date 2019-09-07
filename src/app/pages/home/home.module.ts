import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ConnectModalComponent } from './connect/connect-modal/connect-modal.component';
import { ConnectComponent } from './connect/connect.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
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
<<<<<<< HEAD
        component: ConnectComponent
=======
        component: ConnectComponent   
      },
      {
        path: 'dailydev',
        component: DailydevComponent
>>>>>>> parent of 3349472... added connectModal
      }
    ])
  ],
  declarations: [HomePage, MessComponent, ConnectComponent]
})
export class HomePageModule { }

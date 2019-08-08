import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { IonicModule } from '@ionic/angular';
import { ConnectComponent } from './connect/connect.component';
import { HomePage } from './home.page';
import { MessComponent } from './mess/mess.component';

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
                component: ConnectComponent
            }
        ])
    ],
    declarations: [HomePage, MessComponent, ConnectComponent],
    providers: [
        SocialSharing
    ]
})
export class HomePageModule { }

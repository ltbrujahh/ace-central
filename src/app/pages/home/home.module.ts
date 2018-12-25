import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Route, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HomePage } from './home.page';


const ROUTES: Route[] = [
    {
        path: '',
        component: HomePage,
        // canActivate: [HasLoginGuard],
        // canActivateChild: [HasLoginGuard]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(ROUTES)
    ],
    declarations: [HomePage]
})
export class HomePageModule { }

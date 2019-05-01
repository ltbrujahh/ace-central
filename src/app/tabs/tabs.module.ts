import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TabsPage } from './tabs.page';
import { RedirectorGuard, RedirectorGuardData } from '../redirector.guard';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        canActivate: [RedirectorGuard],
        data: { to: 'home' } as RedirectorGuardData,
        children: [
            {
                path: 'home',
                loadChildren: '../home/home.module#HomePageModule'
            },
            {
                path: 'calendar',
                loadChildren: '../calendar/calendar.module#CalendarPageModule'
            },
            {
                path: 'bible',
                loadChildren: '../bible/bible.module#BiblePageModule'
            },
            {
                path: 'help',
                loadChildren: '../help/help.module#HelpPageModule'
            },
            {
                path: 'settings',
                loadChildren: '../settings/settings.module#SettingsPageModule'
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [TabsPage]
})
export class TabsPageModule { }

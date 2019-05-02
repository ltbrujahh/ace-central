import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { RedirectorGuard, RedirectorGuardData } from '@guard/redirector.guard';
import { IonicModule } from '@ionic/angular';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: '',
        component: TabsPage,
        canActivate: [RedirectorGuard],
        data: { to: 'home' } as RedirectorGuardData,
        children: [
            {
                path: 'home',
                loadChildren: '@pages/home/home.module#HomePageModule'
            },
            {
                path: 'calendar',
                loadChildren: '@pages/calendar/calendar.module#CalendarPageModule'
            },
            {
                path: 'bible',
                loadChildren: '@pages/bible/bible.module#BiblePageModule'
            },
            {
                path: 'help',
                loadChildren: '@pages/help/help.module#HelpPageModule'
            },
            {
                path: 'settings',
                loadChildren: '@pages/settings/settings.module#SettingsPageModule'
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

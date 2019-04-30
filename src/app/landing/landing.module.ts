import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { LandingPage } from './landing.page';
import { HomePage } from '../home/home.page';

const routes: Routes = [
  {
    path: '',
    component: LandingPage
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'calendar',
    component: HomePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LandingPage, HomePage]
})
export class LandingPageModule {}

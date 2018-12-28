import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { LandingComponent } from './landing/landing.component';
import { LoginPage } from './login.page';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
    {
        path: '',
        component: LoginPage,
        // redirectTo: 'login/landing',
        // pathMatch: 'full',
        children: [
            { path: 'landing', component: LandingComponent },
            { path: 'registration', component: RegistrationComponent }
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
    declarations: [LoginPage, RegistrationComponent, LandingComponent]
})
export class LoginPageModule { }

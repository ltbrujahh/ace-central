import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HasLoginGuard } from './guards/has-login.guard';
import { HasNoLoginGuard } from './guards/has-no-login.guard';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        canActivate: [HasNoLoginGuard],
        canLoad: [HasNoLoginGuard],
        loadChildren: './pages/login/login.module#LoginPageModule'
    },
    {
        path: 'home',
        canActivate: [HasLoginGuard],
        canActivateChild: [HasLoginGuard],
        canLoad: [HasLoginGuard],
        loadChildren: './pages/home/home.module#HomePageModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }

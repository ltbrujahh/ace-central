import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HasNoLoginGuard } from './guards/has-no-login.guard';
import { HasLoginGuard } from './guards/has-login.guard';

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
        canLoad: [HasLoginGuard],
        loadChildren: './pages/home/home.module#HomePageModule'
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }



import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

//one import combined in barel
import { HomeComponent } from './home/index';
import { PicturesComponent } from './pictures/index';
import { LandingPageComponent } from './landing-page/index';

import { LoggedInGuard } from './common/guard-service';

//canDeactivate:['canDeactivateCreateEvent'],

export const appRoutes:Routes = [
    {path:'home',component:HomeComponent,canActivate:[LoggedInGuard]},
    {path:'pictures',component:PicturesComponent,canActivate:[LoggedInGuard]},
    {path:'landingPage',component:LandingPageComponent},
    { path: '404', component: Error404Component },
    {path:'', redirectTo:'/home', pathMatch:'full'}
    //{path:'user',loadChildren:'app/user/user.module#UserModule'}
    ];
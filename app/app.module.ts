import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router'

import { BabycamAppComponent} from './babycam-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { HomeComponent } from './home/index';
import { PicturesComponent } from './pictures/index';
import { LandingPageComponent } from './landing-page/index';

//services
import { AuthService } from './user/auth.service';

import { appRoutes } from './routes'
@NgModule({
    imports:[BrowserModule,
            RouterModule.forRoot(appRoutes)],
    declarations:[
                    BabycamAppComponent,
                    NavbarComponent,
                    Error404Component,
                    HomeComponent,
                    PicturesComponent,
                    LandingPageComponent
                    ],
    providers: [AuthService],
    bootstrap:[BabycamAppComponent]
})

export class AppModule {
    
}
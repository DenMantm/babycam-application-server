import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';


import { BabycamAppComponent} from './babycam-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { Error404Component } from './errors/404.component';

import { HomeComponent } from './home/index';
import { PicturesComponent } from './pictures/index';
import { LandingPageComponent } from './landing-page/index';


//services
import { AuthService } from './user/auth.service';

import { LoggedInGuard, 
        ColorSchemeService,
        JQUERY_TOKEN,
        SimpleModalComponent
         } from './common/index';

import { appRoutes } from './routes'

declare let jQuery:Object;
// declare let metro:Object;

@NgModule({
    imports:[BrowserModule,
            RouterModule.forRoot(appRoutes),           
            FormsModule,
            ReactiveFormsModule,
            HttpModule],
    declarations:[
                    BabycamAppComponent,
                    NavbarComponent,
                    Error404Component,
                    HomeComponent,
                    PicturesComponent,
                    LandingPageComponent,
                    SimpleModalComponent
                    ],
    providers: [AuthService,LoggedInGuard,ColorSchemeService,
    {provide:JQUERY_TOKEN,useValue:jQuery}
    ],
    bootstrap:[BabycamAppComponent]
})

export class AppModule {
    
}
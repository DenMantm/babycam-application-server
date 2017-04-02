import {Component, HostListener} from '@angular/core';
import { AuthService } from './user/auth.service';
@Component({
    selector:'babycam-app',
    template:`<navbar-component *ngIf="isAuthenticated()"></navbar-component>
              <router-outlet></router-outlet>`
})

export class BabycamAppComponent {
constructor(private auth:AuthService){

}
isAuthenticated(){
    return this.auth.isAuthenticated();
}

}
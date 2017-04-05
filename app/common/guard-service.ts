import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../user/auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService,private router:Router) {
  }

  canActivate() {
      if(!this.auth.isAuthenticated()){
        this.router.navigate(['landingPage']);
      }
      else return true
    //return this.auth.isAuthenticated();
  }
}
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../user/auth.service';
import { Http } from '@angular/http';

@Injectable()
export class LoggedInGuard implements CanActivate {
  constructor(private auth: AuthService,private router:Router) {
  }

  canActivate() {
console.log("XXXXXXXXXXXXXXXXXXXXXXXX");
      if(!this.auth.isAuthenticated()){
        return !!this.auth.isAuthenticatedOnServer().then(res=>{
            console.log(res.id == undefined)
            if(res.id == undefined){
              this.router.navigate(['landingPage']);
            }else{
              return true;
            }
        });
      }
      else return true;

    //return this.auth.isAuthenticated();
  }
}
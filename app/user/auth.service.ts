import { Injectable } from '@angular/core';
import { IUser } from './user.model'
import { Router } from '@angular/router';
@Injectable()
export class AuthService{
    user:IUser

    constructor(private router:Router){}

    isAuthenticated():boolean{
        return !!this.user;
    }
    login(username,password){
        //spin authentication here and if succesfull
        this.user = {id:1, 
                    username:username,
                    firstName:'Deniss' }
        this.router.navigate(['/home'])
        //return true
    }
    logout(){

    }
    getCurrentUser(){
        return this.user
    }
}
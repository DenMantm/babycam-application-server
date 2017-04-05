import {Component, HostListener, OnInit} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../user/auth.service';
import { IUser } from '../user/user.model';


@Component({
    templateUrl:'app/landing-page/landing-page.component.html',
    styleUrls:['app/landing-page/landing-page.component.css']
})


export class LandingPageComponent implements OnInit {

dynamicBannerBackground:string;
dynamicMarginTop:string;
dynamicOpacity:number;
loginWindow:boolean;
loginForm:FormGroup;
username:FormControl;
password:FormControl;
user:IUser;

constructor(private auth:AuthService){}

//form
ngOnInit(){
    this.username = new FormControl('',Validators.required)
    this.password = new FormControl('',Validators.required)
    this.loginForm = new FormGroup({
        username:this.username,
        password:this.password
    })
}

@HostListener("window:scroll", ['$event'])
onWindowScroll(event) {
   let scrollPos = document.body.scrollTop;
 //get current scroll position
      //console.debug("Scroll Event", document.body.scrollTop);
      // see András Szepesházi's comment below
      //console.debug("Scroll Event", window.pageYOffset );
      this.dynamicBannerBackground = '50% ' + (-scrollPos/4)+"px";
      this.dynamicMarginTop = (scrollPos/4)+"px";
      this.dynamicOpacity =  1-(scrollPos/250);



}
login(value){
    console.log(value);
    let response = this.auth.login(value.username,value.password);
    if(!response){
        console.log('Failed to login');
    }
}

	
}
import {Component, HostListener} from '@angular/core';



@Component({
    templateUrl:'app/landing-page/landing-page.component.html',
    styleUrls:['app/landing-page/landing-page.component.css']
})


export class LandingPageComponent {

dynamicBannerBackground:string;
dynamicMarginTop:string;
dynamicOpacity:number;
loginWindow:boolean;

@HostListener("window:scroll", ['$event'])
onWindowScroll(event) {
   let scrollPos = document.body.scrollTop;
 //get current scroll position
      console.debug("Scroll Event", document.body.scrollTop);
      // see András Szepesházi's comment below
      //console.debug("Scroll Event", window.pageYOffset );
      this.dynamicBannerBackground = '50% ' + (-scrollPos/4)+"px";
      this.dynamicMarginTop = (scrollPos/4)+"px";
      this.dynamicOpacity =  1-(scrollPos/250);
}
showLoginWindow(){
    this.loginWindow = false;
    console.log(this.loginWindow);
}
hideLoginWindow(){
    this.loginWindow = true;
}
	
}
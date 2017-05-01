import { Component, Inject, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';
import { JQUERY_TOKEN } from '../common/index';
import { AuthService } from '../user/auth.service';

@Component({
    selector: 'navbar-component',
    templateUrl: 'app/nav/navbar.component.html'
    //     styles: [`.nav.navbar-nav {font-size:15px;}
    // #searchForm {margin-right: 100px;}
    // @media (max-width:1200px){#searchForm {display:none} }
    // li > a.active{color:red;}`]
})

export class NavbarComponent {
    private el:HTMLElement
    colors:string[] = [];
    @ViewChild('charm') charm:ElementRef;
    @Output() changeScheme = new EventEmitter();
    constructor(@Inject(JQUERY_TOKEN) private $,private auth:AuthService){
            
    }
    ngOnInit(){
        this.el = this.charm.nativeElement;
        let tmp:string;
        for(let i =0;i<20;i++){
            tmp = this.getRandomColor();
            this.colors.push(tmp);
        }
    }
    showColourScheme(){
           var  charm = this.$(this.el).data("charm");
            if (charm.element.data("opened") === true) {
                charm.close();
            } else {
                charm.open();
            }
    }
    changeColour(color){
        this.changeScheme.emit(color);
        console.log(color);
    }

    getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;   
  } 
  logout(){
    this.auth.logout();
  }


}
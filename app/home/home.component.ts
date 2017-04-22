import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

declare let JSMpeg:any;

@Component({
    templateUrl:'./app/home/home.component.html',
		styles:[`.background{
			background-image: url("app/assets/images/video-page/white-background-stars.jpg");
			height:100%;}
			canvas{border-style: groove;width:100%}`]
})


export class HomeComponent {
	canvas:any;
	url:string;
	player:any;
	@ViewChild("_canvas") myCanvas:ElementRef; 
	//constructor(canvas:canvas){}
	
  ngAfterViewInit() {
    
    this.canvas = this.myCanvas.nativeElement;

	this.url = 'ws://192.168.199:8082/';
	this.player = new JSMpeg.Player(this.url, { canvas: this.canvas });
  }
	


}
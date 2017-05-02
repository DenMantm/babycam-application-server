import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import { SaveImageService } from '../common/index';

declare let JSMpeg:any;

@Component({
    templateUrl:'./app/home/home.component.html',
		//background-image: url("app/assets/images/video-page/white-background-stars.jpg")
		styles:[`
						canvas{border-style: groove;width:100%}`]
})


export class HomeComponent {
	canvas:any;
	url:string;
	player:any;
	@ViewChild("_canvas") myCanvas:ElementRef; 
	//constructor(canvas:canvas){}
	constructor(private save:SaveImageService){
		
	}
  ngAfterViewInit() {
    
    this.canvas = this.myCanvas.nativeElement;

	this.url = 'ws://192.168.199:8082/';
	this.player = new JSMpeg.Player(this.url, { canvas: this.canvas });
  }
	


}
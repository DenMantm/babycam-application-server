import {Component, ViewChild, ElementRef, AfterViewInit} from '@angular/core';

declare let JSMpeg:any;

@Component({
    template:`<h3>Video Stream</h3>
    	<canvas #_canvas id="video-canvas"></canvas>
	`
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
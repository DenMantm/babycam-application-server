import { Component, Input, Inject, ViewChild, ElementRef } from '@angular/core';
import { JQUERY_TOKEN } from './jQuery.service';

@Component({
    selector: 'simple-modal',
    template:`
    <div #mymodal id="{{modalId}}" class="modal fade" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"><span>&times;</span></button>
                    <h4 class="modal-title">{{title}}</h4>
                </div>
                <div class="modal-body" (click)="closeModal()">
                    <ng-content ></ng-content>
                </div>
            </div>
        </div>
    </div>
    `,
    styles:[`
    .modal-body {height:250px; overflow-y:scroll;}
    `]
})
export class SimpleModalComponent{
    @Input() title:string;
    @Input() modalId:string;
    @ViewChild('mymodal') div:ElementRef;
    
    constructor(@Inject(JQUERY_TOKEN) private $:any){}
    
    closeModal(){
        console.log('Triggered');
        this.$(this.div.nativeElement).modal('hide');
    }
}
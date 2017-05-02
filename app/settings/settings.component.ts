import { Component, OnInit } from '@angular/core';
import { IUser } from '../user/user.model';
import { AuthService } from '../user/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NotifyService } from '../common/index';
@Component({
    selector:'settings-component',
    templateUrl:'/app/settings/settings.component.html',
    styles:[`label{color:gray}
    .text{width:100%!important}
    p{  color:black;
    }`]
})

export class SettingsComponent implements OnInit {

        currentUser:IUser;

        //User Settings Form
        settingsForm:FormGroup;
        userName:FormControl;
        firstName:FormControl; 
        lastName:FormControl;

        //Babby Settings Form
        babySettingsForm:FormGroup;
        babyName:FormControl;
        constructor(private authService:AuthService,private notify:NotifyService){}

        ngOnInit(): void {
           this.currentUser = this.authService.currentUser;
        //settings form
        this.userName = new FormControl(this.currentUser.userName,Validators.required);
        this.firstName = new FormControl(this.currentUser.firstName,Validators.required); 
         this.lastName = new FormControl(this.currentUser.lastName,Validators.required); 
         this.settingsForm = new FormGroup({
           userName:this.userName,
           firstName:this.firstName, 
           lastName:this.lastName 
         })
         //baby settings form
         this.babyName = new FormControl(this.currentUser.babySettings.babyName,Validators.required);
          this.babySettingsForm = new FormGroup({
           babyName:this.babyName
         })
        }
        saveSettings(value){
            console.log(value);
            this.notify.saveSuccess("Saved","User Profile Information Succesfully saved")
        }
        saveBabySettings(value){
            console.log(value);
            this.notify.saveSuccess("Saved","Baby Information Succesfully saved")
        }
        openColorCharm(){
                
        }

    
}
import { Injectable,OnInit } from '@angular/core';
import { AuthService } from '../user/auth.service';
import { Http,FormData,RequestOptions,Headers } from '@angular/http';

@Injectable()
export class SaveImageService implements OnInit {
  constructor(private auth: AuthService,private http:Http) {
  }

  ngOnInit() {
    //return this.auth.isAuthenticated();
  }
  saveImage(canvas){
      let headers = new Headers({'Content-Type':'multipart/form-data'});
        let options = new RequestOptions({headers:headers});
        let formData = new FormData();

        formData.append("img",  canvas.toDataURL());

        this.http.post('/api/login',canvas,options).do(
            resp =>{ 
                console.log('Data was posted');
            }
        }).catch(error =>{
                return Observable.of(false);
            })
  }
}


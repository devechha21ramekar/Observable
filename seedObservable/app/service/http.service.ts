import { Injectable } from '@angular/core';
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs/Rx";

@Injectable()
export class HttpService {

  constructor(private http: Http) {
  }

  getData() {}

  sendData(user:any){
}

 getFirebaseData(){
 }

 handleError(error:any){
 }
  
}

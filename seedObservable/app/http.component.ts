import { Component } from '@angular/core';
import { Response } from '@angular/http';

import { HttpService } from "./service/http.service";

@Component({
  selector: 'app-http',
  template: `
  <h2>Http component</h2>
  <label for="username" >Username: </label>
  <input type="text" id="username" #username />
  <br>
   <label for="mail" >E-mail: </label>
  <input type="email" id="mail" #mail />
  <br>
  <button (click) = "onSubmit(username.value, mail.value )" >Submit</button>
  <hr>
  <button (click) = "getDbData()" >Get Data</button>
 
    <table border="1"><thead><th>User name</th><th>Email</th></thead>
    <tr *ngFor = "let item of items" ><td>{{item.username}}</td><td>{{item.email}}</td></tr></table>
    <hr>
    <p>{{asyncString | async}}</p>
  `
})
export class HttpComponent {
  
  items : any[] = []; 
  error : string;
  asyncString  = this.httpService.getData();

  constructor(){
  }
    onSubmit(username: string, email:string){

    }

    getDbData(){
    }



  
}

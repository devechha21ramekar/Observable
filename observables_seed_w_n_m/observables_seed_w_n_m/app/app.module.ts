import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AppComponent }  from './app.component';

import { ParentComponent } from "./service/parent.component";
import { CmpAComponent } from "./service/cmp-a.component";
import { CmpBComponent } from "./service/cmp-b.component";
import { HttpComponent } from "./http.component";
import { HttpService } from "./service/http.service";


@NgModule({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent,
        ParentComponent,
        CmpAComponent,
        CmpBComponent,
        HttpComponent
         ],
    bootstrap:    [ AppComponent ],
    providers : [HttpService]
})
export class AppModule { }

import {Component} from '@angular/core';

@Component({
    selector: 'app',
     templateUrl: 'app/app.component.html',
})
export class AppComponent {
    name: string;

    constructor() {
        this.name = 'Angular 2';
    }
}
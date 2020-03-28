import { Component } from "@angular/core";
import { Location } from '@angular/common';

@Component({
    selector: 'contact-us',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent {

    constructor(private appNavigation: Location) {}

    goPreviousPage() {
        this.appNavigation.back();
        console.log(this.appNavigation.getState());
    }

    goForwardPage() {
        this.appNavigation.forward();
        console.log(this.appNavigation.getState());
    }

}
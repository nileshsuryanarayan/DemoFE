import { Component } from "@angular/core";
import { Location } from '@angular/common';
import { Menu } from 'src/app/app-models/Menu.model';
import Links from './Links.json';

@Component({
    selector: 'contact-us',
    templateUrl: './contactus.component.html',
    styleUrls: ['./contactus.component.css']
})
export class ContactUsComponent {

    Menus: Menu[];

    constructor(private appNavigation: Location) {}

    ngOnInit() {
        this.Menus = Links; 
        // console.log(NoticesLinks);
    }

    goPreviousPage() {
        this.appNavigation.back();
        console.log(this.appNavigation.getState());
    }

    goForwardPage() {
        this.appNavigation.forward();
        console.log(this.appNavigation.getState());
    }

}
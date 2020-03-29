import { Component } from "@angular/core";
import { Location } from '@angular/common';
import { Menu } from '../app-models/Menu.model';
import HomeLinks from './HomeLinks.json';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    private homeMenus: Menu[];

    constructor(private appNavigation: Location) {}

    goPreviousPage() {
        this.appNavigation.back();
        console.log(this.appNavigation.getState());
    }

    goForwardPage() {
        this.appNavigation.forward();
        console.log(this.appNavigation.getState());
    }

    ngOnInit() {
        this.homeMenus = HomeLinks;
    }

}
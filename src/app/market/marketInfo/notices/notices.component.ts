import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/app-models/Menu.model';
import Links from './Links.json';

@Component({
    selector: 'notices',
    templateUrl: './notices.component.html',
    styleUrls: ['./notices.component.css']
})
export class NoticesComponent implements OnInit {

    Menus: Menu[];

    ngOnInit() {
        this.Menus = Links;
        // console.log(Links);
    }
}

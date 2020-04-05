import { Component } from "@angular/core";
import Links from './Links.json';
import { Menu } from 'src/app/app-models/Menu.model';

@Component({
    selector: 'holidays',
    templateUrl: './holidays.component.html',
    styleUrls: ['./holidays.component.css']
})
export class HolidaysComponent {

    Menus: Menu[];

    ngOnInit() {
        this.Menus = Links;
        // console.log(NoticesLinks);
    }
}
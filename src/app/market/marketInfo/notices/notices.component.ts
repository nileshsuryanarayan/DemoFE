import { Component } from "@angular/core";
import { Menu } from 'src/app/app-models/Menu.model';
import NoticesLinks from './NoticesLinks.json';

@Component({
    selector: 'notices',
    templateUrl: './notices.component.html',
    styleUrls: ['./notices.component.css']
})
export class NoticesComponent {

    private noticesMenus: Menu[];

    ngOnInit() {
        this.noticesMenus = NoticesLinks;
        console.log(NoticesLinks);
    }
}
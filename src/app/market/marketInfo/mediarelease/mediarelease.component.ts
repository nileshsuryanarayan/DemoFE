import { Component } from "@angular/core";
import Links from './Links.json';
import { Menu } from 'src/app/app-models/Menu.model';

@Component({
    selector: 'media-release',
    templateUrl: './mediarelease.component.html',
    styleUrls: ['./mediarelease.component.css']
})
export class MediaReleaseComponent {

    Menus: Menu[];

    ngOnInit() {
        this.Menus = Links; 
        // console.log(NoticesLinks);
    }
}
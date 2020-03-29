import { Component, Input } from "@angular/core";
import { Menu } from '../app-models/Menu.model';

@Component({
    selector: 'direct-links',
    templateUrl: './directlinks.component.html',
    styleUrls: ['./directlinks.component.css']
})
export class DirectLinksComponent {

    @Input() menus: Menu[];
}
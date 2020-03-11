import { Injectable } from "@angular/core";
import { Menu } from '../models/menu.model';

@Injectable()
export class MenuService {

    menus: Menu[];

    constructor() {}

    getMenus() {

        this.menus = [
            {'name': 'home',
             'subMenus': [
                 {'name': 'Arduino'},
                 {'name': 'Raspberry Pi'},
                 {'name': 'LiFi'},
                 {'name': 'Biocons'}
             ]
            },
            {'name': 'about us'},
            {'name': 'contact us'}
        ];

        return this.menus;
    }

}
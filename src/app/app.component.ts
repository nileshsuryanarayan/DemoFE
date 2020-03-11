import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from './services/menu.service';
import { Menu } from './models/menu.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menus: Menu[];

  constructor(private router: Router, private menuservice: MenuService) { }

  ngOnInit() {
    this.menus = this.menuservice.getMenus();
  }

}

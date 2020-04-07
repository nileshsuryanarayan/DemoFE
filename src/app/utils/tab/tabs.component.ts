import { Component, ContentChildren, QueryList } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.css']
})
export class TabsComponent {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  select(tab: TabComponent) {
    this.tabs.toArray().forEach(tab => {
      tab.active = false;
    });
    tab.active = true;
  }

  ngAfterContentInit() {
    let actives = this.tabs.filter(tab => tab.active);

    if (actives.length === 0) this.select(this.tabs.first);
  }
}
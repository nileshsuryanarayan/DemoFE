import { Component, ContentChildren, QueryList, Input, AfterContentInit } from '@angular/core';
import { TabComponent } from './tab.component';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.css']
})
export class TabsComponent implements AfterContentInit {
  @ContentChildren(TabComponent) tabs: QueryList<TabComponent>;

  @Input() class: string;
  @Input() fontStyle: string;

  select(tab: TabComponent) {
    this.tabs.toArray().forEach(data => {
      tab.active = false;
    });
    tab.active = true;
  }

  ngAfterContentInit() {
    const actives = this.tabs.filter(tab => tab.active);

    if (actives.length === 0) { this.select(this.tabs.first); }
  }
}

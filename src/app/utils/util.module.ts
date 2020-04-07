import { NgModule } from "@angular/core";
import { GraphComponent } from './graph/graph.component';
import { GraphService } from './graph/graph.service';
import { TabsComponent } from './tab/tabs.component';
import { TabComponent } from './tab/tab.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [GraphComponent, TabsComponent, TabComponent],
    providers: [GraphService],
    imports: [CommonModule],
    exports: [GraphComponent, TabsComponent, TabComponent]
})
export class UtilModule {

}
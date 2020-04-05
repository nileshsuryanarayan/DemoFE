import { NgModule } from "@angular/core";
import { GraphComponent } from './graph/graph.component';
import { GraphService } from './graph/graph.service';

@NgModule({
    declarations: [GraphComponent],
    providers: [GraphService],
    imports: [],
    exports: [GraphComponent]
})
export class UtilModule {

}
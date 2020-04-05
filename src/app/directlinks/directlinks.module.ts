import { NgModule } from "@angular/core";
import { DirectLinksComponent } from './directlinks.component';
import { DirectLinksRoutingModule } from './directlinks-routing.module';

@NgModule({
    declarations: [DirectLinksComponent],
    providers: [],
    imports: [DirectLinksRoutingModule],
    exports: []
})
export class DirectLinksModule {}
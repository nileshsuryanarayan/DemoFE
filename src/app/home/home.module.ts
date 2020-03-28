import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';

@NgModule ({
    declarations: [HomeComponent],
    providers: [],
    imports: [ HomeRoutingModule ],
    exports: [],
    bootstrap: []
})
export class HomeModule {

}
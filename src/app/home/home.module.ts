import { NgModule } from "@angular/core";
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppModule } from '../app.module';
import { StaticModule } from '../static/static.module';

@NgModule ({
    declarations: [HomeComponent],
    providers: [],
    imports: [ HomeRoutingModule ],
    exports: [],
    bootstrap: []
})
export class HomeModule {

}
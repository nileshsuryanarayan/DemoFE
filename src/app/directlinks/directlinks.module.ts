import { NgModule } from "@angular/core";
import { DirectLinksComponent } from './directlinks.component';
import { DirectLinksRoutingModule } from './directlinks-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [DirectLinksComponent],
    providers: [],
    imports: [DirectLinksRoutingModule, CommonModule],
    exports: [DirectLinksComponent]
})
export class DirectLinksModule {}
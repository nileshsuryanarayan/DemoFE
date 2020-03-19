import { NgModule } from "@angular/core";
import { ContactUsComponent } from './contactus/contactus.component';
import { StaticRoutingModule } from './static-routing.module';
import { StaticComponent } from './static.component';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule, StaticRoutingModule],
    exports: [],
    declarations: [StaticComponent, ContactUsComponent],
    providers: [],
    bootstrap: [ContactUsComponent]
})
export class StaticModule {}
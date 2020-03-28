import { NgModule } from "@angular/core";
import { ContactUsComponent } from './contactus/contactus.component';
import { StaticRoutingModule } from './static-routing.module';
import { StaticComponent } from './static.component';
import { RouterModule } from '@angular/router';
import { SocialIcons } from './socialicons/socialicons.component';

@NgModule({
    imports: [RouterModule, StaticRoutingModule],
    exports: [SocialIcons],
    declarations: [StaticComponent, ContactUsComponent, SocialIcons],
    providers: [],
    bootstrap: [ContactUsComponent]
})
export class StaticModule {}
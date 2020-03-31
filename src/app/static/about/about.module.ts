import { NgModule } from "@angular/core";
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { DirectLinksModule } from 'src/app/directlinks/directlinks.module';

@NgModule({
    declarations: [AboutComponent, ContactUsComponent, FeedbackComponent],
    providers: [],
    imports: [AboutRoutingModule, DirectLinksModule],
    exports: []
})
export class AboutModule {}
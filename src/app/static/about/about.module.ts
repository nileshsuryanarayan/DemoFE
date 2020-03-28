import { NgModule } from "@angular/core";
import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { ContactUsComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';

@NgModule({
    declarations: [AboutComponent, ContactUsComponent, FeedbackComponent],
    providers: [],
    imports: [AboutRoutingModule],
    exports: []
})
export class AboutModule {}
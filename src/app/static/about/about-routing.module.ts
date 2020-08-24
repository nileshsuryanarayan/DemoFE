import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactUsComponent } from './contactus/contactus.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutComponent } from './about.component';

const aboutRoutes: Routes = [
    { path: 'contact-us', component: ContactUsComponent },
    { path: 'feedback', component: FeedbackComponent },
    { path: '', component: AboutComponent }
];

@NgModule({
    imports: [RouterModule.forChild(aboutRoutes)],
    exports: [RouterModule]
})
export class AboutRoutingModule {

}

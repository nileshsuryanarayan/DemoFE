import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NoticesComponent } from './notices/notices.component';
import { MediaReleaseComponent } from './mediarelease/mediarelease.component';
import { HolidaysComponent } from './holidays/holidays.component';

const routes: Routes = [
    { path: 'notices', component: NoticesComponent },
    { path: 'media-release', component: MediaReleaseComponent },
    { path: 'listofholis', component: HolidaysComponent }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class MarketInfoRoutingModule {}
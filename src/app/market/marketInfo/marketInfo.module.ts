import { NgModule } from "@angular/core";
import { NoticesComponent } from './notices/notices.component';
import { MarketInfoRoutingModule } from './marketInfo-routing.module';
import { MediaReleaseComponent } from './mediarelease/mediarelease.component';
import { HolidaysComponent } from './holidays/holidays.component';
import { DirectLinksComponent } from 'src/app/directlinks/directlinks.component';
import { DirectLinksModule } from 'src/app/directlinks/directlinks.module';

@NgModule({
    declarations: [NoticesComponent, MediaReleaseComponent, HolidaysComponent],
    providers: [],
    imports: [MarketInfoRoutingModule, DirectLinksModule],
    exports: []
})
export class MarketInfoModule {}
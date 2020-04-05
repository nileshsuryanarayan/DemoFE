import { NgModule } from "@angular/core";
import { NoticesComponent } from './notices/notices.component';
import { MarketInfoRoutingModule } from './marketInfo-routing.module';
import { MediaReleaseComponent } from './mediarelease/mediarelease.component';
import { HolidaysComponent } from './holidays/holidays.component';

@NgModule({
    declarations: [NoticesComponent, MediaReleaseComponent, HolidaysComponent],
    providers: [],
    imports: [MarketInfoRoutingModule],
    exports: []
})
export class MarketInfoModule {}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { NoticesComponent } from './marketInfo/notices/notices.component';

const marketRoutes: Routes = [
    { path: 'MarketInfo', loadChildren: './marketInfo/marketInfo.module#MarketInfoModule' },
    // { path: 'notices', component: NoticesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(marketRoutes)],
    exports: [RouterModule]
})
export class MarketRoutingModule {}
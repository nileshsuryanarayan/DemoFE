import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const marketRoutes: Routes = [
    { path: 'MarketInfo', loadChildren: './marketInfo/marketInfo.module#MarketInfoModule' },
    // { path: 'notices', component: NoticesComponent }
];

@NgModule({
    imports: [RouterModule.forChild(marketRoutes)],
    exports: [RouterModule]
})
export class MarketRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const directLinks: Routes = [
    { path: 'static', loadChildren: '../static/static.module#StaticModule' },
    { path: 'market', loadChildren: '../market/market.module#MarketModule' },
    { path: 'about', loadChildren: '../static/about/about.module#AboutModule' }
];

@NgModule({
    imports: [RouterModule.forChild(directLinks)],
    exports: [RouterModule]
})
export class DirectLinksRoutingModule {}

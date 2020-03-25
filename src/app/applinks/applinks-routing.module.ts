import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { MarketModule } from './market/market.module';

const appLinks: Routes = [
    { path: '', loadChildren: './home/home.module#HomeModule' },
    { path: 'static', loadChildren: './static/static.module#StaticModule' },
    { path: 'market', loadChildren: './market/market.module#MarketModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(appLinks)],
    exports: [RouterModule]
})
export class AppLinksRoutingModule {}
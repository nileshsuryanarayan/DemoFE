import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';

const directLinks: Routes = [
    { path: 'static', loadChildren: '../indirectlinks/indirectlinks.module#IndirectLinksModule' },
    { path: 'market', loadChildren: '../indirectlinks/indirectlinks.module#IndirectLinksModule' },
    { path: 'about', loadChildren: '../applinks/static/about/about.module#AboutModule' }
];

@NgModule({
    imports: [RouterModule.forRoot(directLinks)],
    exports: [RouterModule]
})
export class DirectLinksRoutingModule {}
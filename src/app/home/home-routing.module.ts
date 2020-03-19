import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PageNotFoundComponent } from '../pagenotfound/pagenotfound.component';
import { AppModule } from '../app.module';
import { ContactUsComponent } from '../static/contactus/contactus.component';

const homeRoutes: Routes = [
    // { path: 'market', loadChildren: null },
    { path: 'static', loadChildren: '../static/static.module#StaticModule' },
    { path: '', component: HomeComponent },
    // { path: '', loadChildren: '../static/static.module#StaticModule' }
]

@NgModule({
    imports: [RouterModule.forChild(homeRoutes)],
    exports: [RouterModule]
})
export class HomeRoutingModule {}
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { ContactDetailsComponent } from './contactdetails/contactdetails.component';
import { IdentityDetailsComponent } from './identitydetails/identitydetails.component';
import { IdentityProofsComponent } from './identityproofs/identityproofs.component';
import { PageNotFoundComponent } from 'src/app/pagenotfound/pagenotfound.component';

const routes: Routes = [
    { path: 'stepone', component: ContactDetailsComponent },
    { path: 'steptwo', component: IdentityDetailsComponent},
    { path: 'stepthree', component: IdentityProofsComponent },
    { path: '', redirectTo: '/stepone', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RegistrationRoutingModule {

}
import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from './registration.component';
import { RegistrationRoutingModule } from './registration-routing.module';
import { ContactDetailsComponent } from './contactdetails/contactdetails.component';
import { IdentityDetailsComponent } from './identitydetails/identitydetails.component';
import { IdentityProofsComponent } from './identityproofs/identityproofs.component';

@NgModule({
    declarations: [RegistrationComponent, ContactDetailsComponent, IdentityDetailsComponent, IdentityProofsComponent],
    providers: [],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule , RegistrationRoutingModule],
    exports: [RegistrationComponent]
})
export class RegistrationModule {

}
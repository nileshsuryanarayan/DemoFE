import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [LoginComponent, RegistrationComponent],
    providers: [],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule],
    exports: [LoginComponent, RegistrationComponent]
})
export class UserModule {}
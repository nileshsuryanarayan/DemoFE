import { NgModule } from "@angular/core";
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationModule } from './registration/registration.module';
import { RegistrationComponent } from './registration/registration.component';

@NgModule({
    declarations: [LoginComponent],
    providers: [],
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, RegistrationModule],
    exports: [LoginComponent, RegistrationModule]
})
export class UserModule {}
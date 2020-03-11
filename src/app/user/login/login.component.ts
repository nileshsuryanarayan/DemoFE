import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: []
})
export class LoginComponent {

    loginForm = new FormGroup({
        userId: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required)
    });

    constructor() {}

    validateLogin() {}
}
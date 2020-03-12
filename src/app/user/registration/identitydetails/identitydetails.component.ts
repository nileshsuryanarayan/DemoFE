import { Component } from "@angular/core";
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'identity-details',
    templateUrl: './identitydetails.component.html',
    styleUrls: ['./identitydetails.component.css']
})
export class IdentityDetailsComponent{

    registrationForm = new  FormGroup({
        pan: new FormControl(''),
        aadhar: new FormControl(''),
        bankifsc: new FormControl(''),
        bankaccnumber: new FormControl('')
    });

    validateForm() {
        
    }
}
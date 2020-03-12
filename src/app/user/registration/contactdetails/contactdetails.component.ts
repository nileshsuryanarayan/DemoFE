import { Component } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'contact-details',
    templateUrl: './contactdetails.component.html',
    styleUrls: ['./contactdetails.component.css']
})
export class ContactDetailsComponent{

    contactDetailsForm = new FormGroup({
        firstname: new FormControl('', [Validators.required, Validators.maxLength(15)]),
        lastname: new FormControl('', [Validators.required, Validators.maxLength(15)]),
        email: new FormControl('', [Validators.required, Validators.maxLength(50)]),
        contact: new FormControl('', [Validators.required, Validators.maxLength(13)]),
        addressline1: new FormControl('', [Validators.required, Validators.maxLength(15)]),
        addressline2: new FormControl('', [Validators.maxLength(15)]),
        cityortown: new FormControl('', [Validators.required, Validators.maxLength(32)]),
    });

    validateForm(): void {
        // validate the form like for Regex and other validations
    }

}
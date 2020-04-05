import { Component } from "@angular/core";
import { Timestamp } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'bse-footer',
    templateUrl: './bsefooter.component.html',
    styleUrls: ['./bsefooter.component.css']
})
export class BSEFooterComponent {

    private date;
    private time;
    private zone;

    constructor (private datePipe: DatePipe) {}

    ngOnInit() {
        this.date = this.datePipe.transform(new Date(), 'd MMM y');
        this.time = this.datePipe.transform(new Date(), 'h:mm');
        this.zone = this.datePipe.transform(new Date(), 'z');
    }
}
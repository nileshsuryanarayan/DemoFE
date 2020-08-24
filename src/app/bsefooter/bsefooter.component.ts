import { Component, OnInit } from '@angular/core';
import { Timestamp } from 'rxjs';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'bse-footer',
    templateUrl: './bsefooter.component.html',
    styleUrls: ['./bsefooter.component.css']
})
export class BSEFooterComponent implements OnInit {

    private date;
    private time;
    private zone;

    private myDate: Date;

    constructor(private datePipe: DatePipe) {}

    ngOnInit() {
        this.myDate = new Date();
        this.date = this.datePipe.transform(new Date(), 'd MMM y');
        this.time = this.datePipe.transform(new Date(), 'h:mm');
        this.zone = this.datePipe.transform(new Date(), 'z');
    }
}

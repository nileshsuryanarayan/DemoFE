import { Component, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MarketService } from '../app-services/market.service';

@Component({
    selector: 'bse-head',
    templateUrl: './bsehead.component.html',
    styleUrls: ['./bsehead.component.css']
})
export class BSEHeadComponent {

    private date;
    private time;
    private zone;
    private marketStatus: String;
    private statusElem: HTMLElement;
    private indexValue: number;
    private percentChange: number;

    constructor (private datePipe: DatePipe,
                 private marketServ: MarketService) {}

    ngOnInit() {
        this.date = this.datePipe.transform(new Date(), 'd MMM y');
        this.time = this.datePipe.transform(new Date(), 'h:mm');
        this.zone = this.datePipe.transform(new Date(), 'z');

        this.statusElem = document.getElementById('status');
        //market open-close status
        if(this.marketServ.getMarketStatus()){
            this.statusElem.setAttribute('style', 'color:green');
            this.marketStatus = 'Open';
        } else {
            this.statusElem.setAttribute('style', 'color:red');
            this.marketStatus = 'Close';
        }

        this.indexValue = this.marketServ.getIndexValue();
        this.percentChange = this.marketServ.getPercentangeChange();
    }
}
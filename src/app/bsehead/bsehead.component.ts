import { Component, ElementRef, HostListener } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MarketService } from '../app-services/market.service';
import { Stock } from '../app-models/Stock.model';
import quoteData from "../../assets/data/quotes.data.json";
import { element } from 'protractor';

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
    private display: boolean;

    private quote: string = "";
    private quotes: Stock[];

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

    getQuote($event) {
        $event.stopPropagation();
        // this.display = !this.display;
        this.quotes = this.marketServ.getQuotes(this.quote)
        this.quotes != null ? this.display = true : this.display = false ; 
    }

    /**
     * 
     * @param $event 
     * @description listens to the respective element's click event
     */
    displayDropdown($event) {
        
    }

    /**
     * @param event listens to document object
     * @description This method listens to document object, 
     *              if user clicks anywhere on the screen except
     *              the button or the displayed ul, then the ul
     *              will be hidden
     */
    @HostListener('document:click', ['$event']) onDocumentClick(event) { 
        this.display = false;
    }

}
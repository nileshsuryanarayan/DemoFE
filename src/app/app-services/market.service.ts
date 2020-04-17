import { Injectable } from "@angular/core";
import { DatePipe } from '@angular/common';
import * as market from '../../assets/constants/bse.constants.json';

@Injectable()
export class MarketService {

    Weekend: String[] = ['Saturday','Sunday']; // constant
    
    private day;
    private timeHours;
    private timeMinutes;
    private indexValue: number;
    private percentChange: number;

    private openingHours: number;
    private closingHours: number;
    private openingMinutes: number;
    private closingMinutes: number;
    private marketOpenTime: Date;
    private marketCloseTime: Date;
    

    constructor(private datePipe: DatePipe) {}

    getMarketStatus(): boolean {
        debugger;
        this.day = this.datePipe.transform(new Date(), 'EEEE');
        this.timeHours = this.datePipe.transform(new Date(), 'h');
        this.timeMinutes = this.datePipe.transform(new Date(), 'mm');

        this.openingHours = market.marketOpeningTime.hours;
        this.openingMinutes = market.marketOpeningTime.minutes;
        this.marketOpenTime = new Date(null, null, null, this.openingHours, this.openingMinutes);
        this.marketCloseTime = new Date(null, null, null, this.closingHours, this.closingMinutes)

        if(this.Weekend.includes(this.day)) {
            return false;
        } else if ((this.timeHours > this.marketOpenTime.getHours() && this.timeMinutes > this.marketOpenTime.getMinutes())
                || (this.timeHours < this.marketCloseTime.getHours() && this.timeMinutes < this.marketCloseTime.getMinutes())) {
            // TODO: this syntax isnt't correct
            return true;
        } else {
            return true;
        }
    }

    getIndexValue(): number {
        return this.indexValue = 29815.49;
    }

    getPercentangeChange(): number {
        return this.percentChange = 0.44;
    }
}
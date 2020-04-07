import { Injectable } from "@angular/core";
import { DatePipe } from '@angular/common';

@Injectable()
export class MarketService {

    Weekend: String[] = ['Saturday','Sunday']; // constant
    OpeningTime: Date = new Date('9:00 AM');
    ClosingTime: Date = new Date('3:00 PM');
    
    private day;
    private time;
    private indexValue: number;
    private percentChange: number;
    

    constructor(private datePipe: DatePipe) {}

    getMarketStatus(): boolean{

        this.day = this.datePipe.transform(new Date(), 'EEEE');
        this.time = this.datePipe.transform(new Date(), 'h:mm');

        if(this.Weekend.includes(this.day)) {
            return false;
        } else if (this.time < this.OpeningTime || this.time > this.ClosingTime) {
            // TODO: this syntax isnt't correct
            return false;
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
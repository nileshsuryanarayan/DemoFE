import { Injectable } from "@angular/core";
import { DatePipe } from "@angular/common";
import * as market from "../../assets/constants/bse.constants.json";
import { Stock } from "../app-models/Stock.model";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Observable } from "rxjs";
import * as env from "../../environments/environment";
import quoteData from "../../assets/data/quotes.data.json";

@Injectable()
export class MarketService {
  Weekend: String[] = ["Saturday", "Sunday"]; // constant

  private day;
  private timeHours;
  private timeMinutes;
  private indexValue: number;
  private percentChange: number;
  private quotes: Stock[];
  private BEQuotes: Observable<Stock[]>;
  private quotesURL: string = "quotes";

  private openingHours: number;
  private closingHours: number;
  private openingMinutes: number;
  private closingMinutes: number;
  private marketOpenTime: Date;
  private marketCloseTime: Date;

  constructor(private datePipe: DatePipe, private http: HttpClient) {}

  getMarketStatus(): boolean {
    debugger;
    this.day = this.datePipe.transform(new Date(), "EEEE");
    this.timeHours = this.datePipe.transform(new Date(), "h");
    this.timeMinutes = this.datePipe.transform(new Date(), "mm");

    this.openingHours = market.marketOpeningTime.hours;
    this.openingMinutes = market.marketOpeningTime.minutes;
    this.marketOpenTime = new Date(
      null,
      null,
      null,
      this.openingHours,
      this.openingMinutes
    );
    this.marketCloseTime = new Date(
      null,
      null,
      null,
      this.closingHours,
      this.closingMinutes
    );

    if (this.Weekend.includes(this.day)) {
      return false;
    } else if (
      (this.timeHours > this.marketOpenTime.getHours() &&
        this.timeMinutes > this.marketOpenTime.getMinutes()) ||
      (this.timeHours < this.marketCloseTime.getHours() &&
        this.timeMinutes < this.marketCloseTime.getMinutes())
    ) {
      // TODO: this syntax isnt't correct
      return true;
    } else {
      return true;
    }
  }

  getIndexValue(): number {
    return (this.indexValue = 29815.49);
  }

  getPercentangeChange(): number {
    return (this.percentChange = 0.44);
  }

  /**
   * 
   * @param quote string from the search textbox
   */
  getQuotes(quote: string): Stock[] {

    if(quote != "") {  
    this.BEQuotes = this.http
    .get<Stock[]>(env.environment.marketService); // + this.quotesURL

    this.BEQuotes.subscribe(
      p => {
        this.quotes = p
      }
    )
    for(let index:number = 0; index < this.quotes.length; index++) {
      console.log(!this.quotes[index].symbol.includes(quote))
      if(!this.quotes[index].symbol.includes(quote)){
        this.quotes.splice(index);
      }
    }
    // console.log(this.quotes)
    return this.quotes
    } else {
      return null;
    }
  }
}

import { Component, ElementRef } from "@angular/core";
import { Location, DatePipe } from '@angular/common';
import { Menu } from '../app-models/Menu.model';
import Links from './Links.json';
import { Chart } from "chart.js";
import { GraphComponent } from '../utils/graph/graph.component';
import { MarketService } from '../app-services/market.service';

@Component({
    selector: 'home-component',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent {

    private Menus: Menu[];
    private date;
    private time;
    private marketStatus: String;
    private graphSlideIndex;
    private newsSlideIndex;

    title = "Ng7ChartJs By DotNet Techy";
    LineChart = [];

    constructor(private appNavigation: Location,
                private datePipe: DatePipe,
                private marketServ: MarketService) {}

    goPreviousPage() {
        this.appNavigation.back();
        console.log(this.appNavigation.getState());
    }

    goForwardPage() {
        this.appNavigation.forward();
        console.log(this.appNavigation.getState());
    }

    ngOnInit() {
        this.Menus = Links;

        this.date = this.datePipe.transform(new Date(), 'dd MMM yy');
        this.time = this.datePipe.transform(new Date(), 'h:mm');

        //market open-close status
        if(this.marketServ.getMarketStatus()){
            this.marketStatus = 'Open';
        } else {
            this.marketStatus = 'Close';
        }
    }

}
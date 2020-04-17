import { Component, ElementRef } from "@angular/core";
import { Location, DatePipe } from '@angular/common';
import { Menu } from '../app-models/Menu.model';
import Links from './Links.json';
import { MarketService } from '../app-services/market.service';
import { BSENews } from '../app-models/BSENews.model';
import { BSENewsService } from '../app-services/BSENews.service';
import { Tab } from '../app-models/Tab.model';
import { UtilService } from '../app-services/Util.service';
import { Graph } from '../app-models/Graph.model';
import { GraphService } from '../utils/graph/graph.service';
import * as market from '../../assets/constants/bse.constants.json';

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
    private news: BSENews[];
    private gainerLoser: Tab[];
    private graphOne: Graph;
    private graphTwo: Graph;
    demo: Date;
    private openingHours: number;
    private closingHours: number;
    private openingMinutes: number;
    private closingMinutes: number;
    private marketOpenTime: Date;
    private marketCloseTime: Date;

    title = "Ng7ChartJs By DotNet Techy";
    LineChart = [];

    constructor(private appNavigation: Location,
                private datePipe: DatePipe,
                private marketServ: MarketService,
                private newsServ: BSENewsService,
                private utilServ: UtilService,
                private graphServ: GraphService) {}

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

        this.demo = new Date(null, null, null, 15, 0);
        console.log('Created date');
        console.log(this.demo.getHours()); // this.datePipe.transform(this.demo, 'hh')

        //market open-close status
        debugger
        if(this.marketServ.getMarketStatus()){
            this.marketStatus = 'Open';
        } else {
            this.marketStatus = 'Close';
        }

        // this.news = this.newsServ.getLatestNews();
        this.newsServ.getNews()
        .subscribe(data => this.news = data);

        this.gainerLoser = this.utilServ.getGainLoseTabs();

        this.graphOne = this.graphServ.getChartData();
        this.graphTwo = this.graphServ.getChartDataTwo();
        // console.log(this.graphOne);
        // console.log(this.graphTwo);
   
    }

}
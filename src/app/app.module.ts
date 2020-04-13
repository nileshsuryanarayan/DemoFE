import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CommonModule, DatePipe } from '@angular/common';
import { LanguageComponent } from './language/langauge.component';
import { GroupWebsitesComponent } from './groupwebsites/groupwebsites.component';
import { BSEHeadComponent } from './bsehead/bsehead.component';
import { AppRoutingModule } from './app-routing.module';
import { StaticModule } from './static/static.module';
import { HomeComponent } from './home/home.component';
import { BSEFooterComponent } from './bsefooter/bsefooter.component';
import { DirectLinksModule } from './directlinks/directlinks.module';
import { UtilModule } from './utils/util.module';
import { MarketService } from './app-services/market.service';
import { BSENewsService } from './app-services/BSENews.service';
import { UtilService } from './app-services/Util.service';
import { DerivativesComponent } from './derivatives/derivatives.component';
import { StatisticsComponent } from './statistics/statistics.component';
import { QtrlyResultsComponent } from './quarterlyresults/qtrlyresults.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LanguageComponent,
    GroupWebsitesComponent,
    BSEHeadComponent,
    BSEFooterComponent,
    DerivativesComponent,
    StatisticsComponent,
    QtrlyResultsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    StaticModule,
    DirectLinksModule,
    UtilModule
  ],
  providers: [DatePipe, MarketService, BSENewsService, UtilService],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent]
})
export class AppModule {}

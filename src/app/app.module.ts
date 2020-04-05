import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./pagenotfound/pagenotfound.component";
import { CommonModule, DatePipe } from "@angular/common";
import { DirectLinksComponent } from "./directlinks/directlinks.component";
import { LanguageComponent } from "./language/langauge.component";
import { GroupWebsitesComponent } from "./groupwebsites/groupwebsites.component";
import { BSEHeadComponent } from "./bsehead/bsehead.component";
import { AppRoutingModule } from "./app-routing.module";
import { StaticModule } from "./static/static.module";
import { HomeComponent } from "./home/home.component";
import { BSEFooterComponent } from "./bsefooter/bsefooter.component";
import { DirectLinksModule } from './directlinks/directlinks.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    LanguageComponent,
    GroupWebsitesComponent,
    BSEHeadComponent,
    BSEFooterComponent
  ],
  imports: [AppRoutingModule, BrowserModule, CommonModule, StaticModule, DirectLinksModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent]
})
export class AppModule {}

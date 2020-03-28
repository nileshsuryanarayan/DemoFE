import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { CommonModule, DatePipe } from '@angular/common';
import { DirectLinksComponent } from './directlinks/directlinks.component';
import { LanguageComponent } from './language/langauge.component';
import { GroupWebsitesComponent } from './groupwebsites/groupwebsites.component';
import { BSEHeadComponent } from './bsehead/bsehead.component';
import { AppRoutingModule } from './app-routing.module';
import { StaticModule } from './static/static.module';
import { HomeComponent } from './home/home.component';
import { BSEFooterComponent } from './bsefooter/bsefooter.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    DirectLinksComponent,
    LanguageComponent,
    GroupWebsitesComponent,
    BSEHeadComponent,
    DirectLinksComponent,
    BSEFooterComponent
  ],
  imports: [AppRoutingModule, BrowserModule, CommonModule, StaticModule],
  providers: [DatePipe],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent]
})
export class AppModule {}

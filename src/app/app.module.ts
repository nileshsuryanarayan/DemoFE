import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { PageNotFoundComponent } from "./pagenotfound/pagenotfound.component";
import { CommonModule } from "@angular/common";
import { StaticModule } from "./applinks/static/static.module";
import { DirectLinksComponent } from "./directlinks/directlinks.component";
import { IndirectLinksComponent } from "./indirectlinks/indirectlinks.component";
import { LanguageComponent } from './language/langauge.component';
import { GroupWebsitesComponent } from './groupwebsites/groupwebsites.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    DirectLinksComponent,
    IndirectLinksComponent,
    LanguageComponent,
    GroupWebsitesComponent
  ],
  imports: [BrowserModule, CommonModule, StaticModule],
  providers: [],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent]
})
export class AppModule {}

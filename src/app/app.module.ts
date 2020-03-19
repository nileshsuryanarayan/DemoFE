import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuService } from './services/menu.service';
import { PageNotFoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeModule } from './home/home.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, CommonModule, AppRoutingModule, HomeModule, ReactiveFormsModule,
            HttpClientModule, BrowserAnimationsModule, ToastrModule.forRoot()],
  providers: [MenuService],
  bootstrap: [AppComponent],
  exports: [PageNotFoundComponent]
})
export class AppModule {}

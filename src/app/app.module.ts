import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FundListPageComponent } from './fund-list-page/fund-list-page.component';
import { FundPerformancePageComponent } from './fund-performance-page/fund-performance-page.component';
import { InvesterSummaryPageComponent } from './invester-summary-page/invester-summary-page.component';
import { FileManagerPageComponent } from './file-manager-page/file-manager-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FundListPageComponent,
    FundPerformancePageComponent,
    InvesterSummaryPageComponent,
    FileManagerPageComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

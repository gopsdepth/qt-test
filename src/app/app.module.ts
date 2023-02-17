import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FundPerformancePageComponent } from './fund-performance-page/fund-performance-page.component';
import { InvesterSummaryPageComponent } from './invester-summary-page/invester-summary-page.component';
import { FileManagerPageComponent } from './file-manager-page/file-manager-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FundListModule } from './fund-list/fund-list.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FundPerformancePageComponent,
    InvesterSummaryPageComponent,
    FileManagerPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FundListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

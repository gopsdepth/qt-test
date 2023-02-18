import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FundPerformancePageComponent } from './fund-performance-page/fund-performance-page.component';
import { FileManagerPageComponent } from './file-manager-page/file-manager-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FundListModule } from './fund-list/fund-list.module';
import { InvesterSummaryModule } from './invester-summary/invester-summary.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FundPerformancePageComponent,
    FileManagerPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FundListModule,
    InvesterSummaryModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

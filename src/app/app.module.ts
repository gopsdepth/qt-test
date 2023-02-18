import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FileManagerPageComponent } from './file-manager-page/file-manager-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FundListModule } from './fund-list/fund-list.module';
import { InvesterSummaryModule } from './invester-summary/invester-summary.module';
import { SharedModule } from './shared/shared.module';
import { FundPerformanceModule } from './fund-performance/fund-performance.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    FileManagerPageComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FundListModule,
    InvesterSummaryModule,
    SharedModule,
    FundPerformanceModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

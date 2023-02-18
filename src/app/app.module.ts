import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { FundListModule } from './fund-list/fund-list.module';
import { InvesterSummaryModule } from './invester-summary/invester-summary.module';
import { SharedModule } from './shared/shared.module';
import { FundPerformanceModule } from './fund-performance/fund-performance.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FileManagerModule } from './file-manager/file-manager.module';
import { LocalGuard } from './local.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FundListModule,
    InvesterSummaryModule,
    SharedModule,
    FundPerformanceModule,
    BrowserAnimationsModule,
    FileManagerModule,
  ],
  providers: [LocalGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

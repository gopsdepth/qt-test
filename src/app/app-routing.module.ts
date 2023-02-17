import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerPageComponent } from './file-manager-page/file-manager-page.component';
import { FundListPageComponent } from './fund-list-page/fund-list-page.component';
import { FundPerformancePageComponent } from './fund-performance-page/fund-performance-page.component';
import { InvesterSummaryPageComponent } from './invester-summary-page/invester-summary-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'fund-list', component: FundListPageComponent },
  { path: 'fund-perf', component: FundPerformancePageComponent },
  { path: 'invest-summary', component: InvesterSummaryPageComponent },
  { path: 'file-manager', component: FileManagerPageComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

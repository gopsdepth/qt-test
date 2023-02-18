import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FileManagerPageComponent } from './file-manager/file-manager-page/file-manager-page.component';
import { FundListPageComponent } from './fund-list/fund-list-page/fund-list-page.component';
import { FundPerformancePageComponent } from './fund-performance/fund-performance-page/fund-performance-page.component';
import { InvesterSummaryPageComponent } from './invester-summary/invester-summary-page/invester-summary-page.component';
import { LocalGuard } from './local.guard';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'fund-list', component: FundListPageComponent, canMatch: [LocalGuard] },
  { path: 'fund-perf', component: FundPerformancePageComponent, canMatch: [LocalGuard] },
  { path: 'invest-summary', component: InvesterSummaryPageComponent, canMatch: [LocalGuard] },
  { path: 'file-manager', component: FileManagerPageComponent, canMatch: [LocalGuard] },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

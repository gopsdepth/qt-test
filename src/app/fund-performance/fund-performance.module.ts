import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundPerformancePageComponent } from './fund-performance-page/fund-performance-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatNativeDateModule } from '@angular/material/core';
import { FundPerformanceService } from './fund-performance.service';
import { DealAllocationComponent } from './deal-allocation/deal-allocation.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { InvestmentsComponent } from './investments/investments.component';
import { PortfolioSummaryComponent } from './portfolio-summary/portfolio-summary.component';

@NgModule({
  declarations: [
    FundPerformancePageComponent,
    DealAllocationComponent,
    InvestmentsComponent,
    PortfolioSummaryComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatNativeDateModule,
    MatDatepickerModule,
    GoogleChartsModule,
    MatButtonToggleModule,
  ],
  providers: [FundPerformanceService],
})
export class FundPerformanceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvesterSummaryPageComponent } from './invester-summary-page/invester-summary-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { GoogleChartsModule } from 'angular-google-charts';
import { ValueCreationCardComponent } from './value-creation-card/value-creation-card.component';
import { AggregatedCardComponent } from './aggregated-card/aggregated-card.component';
import { PerformanceCardComponent } from './performance-card/performance-card.component';
import { InvesterSummaryService } from './invester-summary.service';

@NgModule({
  declarations: [InvesterSummaryPageComponent, ValueCreationCardComponent, AggregatedCardComponent, PerformanceCardComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    GoogleChartsModule,
  ],
  providers: [InvesterSummaryService],
  exports: [InvesterSummaryPageComponent]
})
export class InvesterSummaryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundPerformancePageComponent } from './fund-performance-page/fund-performance-page.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    FundPerformancePageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ]
})
export class FundPerformanceModule { }

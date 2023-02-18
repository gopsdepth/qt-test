import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvesterSummaryPageComponent } from './invester-summary-page/invester-summary-page.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [InvesterSummaryPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
  ],
  exports: [InvesterSummaryPageComponent]
})
export class InvesterSummaryModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FundCardComponent } from './fund-card/fund-card.component';
import { BadgeComponent } from './badge/badge.component';
import { RouterModule } from '@angular/router';
import { FundListPageComponent } from './fund-list-page/fund-list-page.component';
import { FundListService } from './fund-list.service';

@NgModule({
  declarations: [
    FundCardComponent,
    BadgeComponent,
    FundListPageComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  providers: [FundListService],
  exports: [
    FundCardComponent,
    BadgeComponent,
    FundListPageComponent,
  ],
})
export class FundListModule { }

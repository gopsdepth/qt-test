import { Component, Input } from '@angular/core';
import { FundCardModel } from 'src/app/models/fund-card.model';

@Component({
  selector: 'app-fund-card',
  templateUrl: './fund-card.component.html',
  styleUrls: ['./fund-card.component.css']
})
export class FundCardComponent {
  @Input() data: Partial<FundCardModel> = {};

  getBadgeState(state: string) {
    if (state == 'Reporting') return 'info';
    if (state == 'Fundraising') return 'success';
    return 'none';
  }
}

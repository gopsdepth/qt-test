import { Injectable } from '@angular/core';
import { FundCardModel } from '../models/fund-card.model';

@Injectable()
export class FundListService {

  constructor() { }

  getData() : FundCardModel[] {
    return [{
      image: 'assets/images/logo.png',
      title: 'GGV Capital Limited',
      funds: [
        {state: 'Reporting', caption: 'USD Fund V (Q1 2021)'},
        {state: 'Reporting', caption: 'USD Fund VI (Q1 2021)'},
      ],
    },{
      image: 'assets/images/sequoia-logo.png',
      title: 'Sequoia Venture Limited',
      funds: [
        {state: 'Fundraising', caption: 'USD Fund VI (First closing)'},
      ],
    }]
  }
}

import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable()
export class InvesterSummaryService {
  private quaters = ['Q1 2022', 'Q2 2022', 'Q3 2022', 'Q4 2022'];
  private valueCreationData: { [quater: string]: any };
  private aggregatedData: { [quater: string]: any };
  private performanceData: { [quater: string]: any };

  constructor() {
    this.valueCreationData = this.quaters.reduce((acc, cur) => ({
        ...acc,
        [cur]: [
          ['Contribution', faker.datatype.float(100), faker.datatype.float(100)],
          ['Distribution', faker.datatype.float(100), faker.datatype.float(100)],
          ['NAV', faker.datatype.float(100), faker.datatype.float(100)],
          ['Total value', faker.datatype.float(100), faker.datatype.float(100)],
        ],
    }), {});
    this.aggregatedData = this.quaters.reduce((acc, cur) => ({
        ...acc,
        [cur]: [
          ['Commitment', `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`],
          ['Contribution', `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`],
          ['Distribution', `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`],
          ['NAV', `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`],
          ['Total Invested', `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`],
          ['Total value', `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`],
          ['DPI', `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`],
          ['RVPI', `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`],
          ['TVPI', `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`, `$${faker.commerce.price()}m`],
        ],
    }), {});
    this.performanceData = this.quaters.reduce((acc, cur) => ({
        ...acc,
        [cur]: [
          ['GGV USD FundV', 'Asia Alternative I', '1.0', '1.0', '1.0', '1.0', '2.0x', '20.0%'],
          ['GGV USD FundVI', 'Asia Alternative Asia', '1.0', '1.0', '1.0', '1.0', '2.0x', '20.0%'],
          ['GGV USD FundVI', 'Asia Alternative I', '1.0', '1.0', '1.0', '1.0', '2.0x', '20.0%'],
          ['Total', '', '3.0', '3.0', '3.0', '3.0', '2.0x', '20.0%'],
        ],
    }), {});
  }

  getCurrencies() {
    return ['USD'];
  }

  getQuaters() {
    return this.quaters
  }

  getValueCreation(quater: string) : { columns: string[], data: any } {
    return {
      columns: ['ValueType', 'USD Fund V', 'USD Fund VI'],
      data: this.valueCreationData[quater],
    };
  }

  getAggregatedData(quater: string): { columns: string[]; data: any; } {
    return {
      columns: ['USD', '2020-12-31', '2021-03-31', 'QoQ'],
      data: this.aggregatedData[quater],
    };
  }
  getPerformanceData(quater: string): { columns: any; data: any; } {
    return {
      columns: ['Fund', 'Investor Entity', 'Commitment', 'Invested', 'Realized', 'Remaining\nFair Value', 'Gross MoC', 'Net IRR'],
      data: this.performanceData[quater],
    };
  }
}

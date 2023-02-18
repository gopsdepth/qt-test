import { Injectable } from '@angular/core';
import { faker } from '@faker-js/faker';

@Injectable()
export class FundPerformanceService {
  private readonly names: { [index: string]: string } = {
    ['usd-fund-v']: 'GGV USD Fund V',
    ['usd-fund-vi']: 'GGV USD Fund VI',
  };

  constructor() { }

  getFundName(id: string): string {
    return this.names[id];
  }

  getDealAllocationData(): { columns: any; data: any; } {
    return {
      columns: ['Deal', 'Value'],
      data: [
        ['Energy', 10],
        ['Consumer Durables & Appeal', 10],
        ['Consumer Services', 10],
        ['Insurance', 10],
        ['Materails', 10],
        ['Software & Services', 10],
        ['Technology Hardware & Equiupment', 10],
        ['Health Care Equipment & Services', 10],
      ],
    };
  }

  getInvestmentData(): { columns: any; data: any; } {
    const years: string[] = [];
    for (let i=2015; i<=2026; i++) {
      years.push(i.toString());
    }
    return {
      columns: ['Year', 'Cumulative investment cost', 'Cumulative total value'],
      data: years.map((year) => [
        year, faker.datatype.number(400), faker.datatype.number(400),
      ]),
    };
  }

  getPortfolioData(): { columns: any; data: any; } {
    return {
      columns: ['Name', 'Initial investment', 'Main industry', 'Commit/Reserves', 'Current ownership', 'Total Investment cost', 'Current investmental cost', 'Realized', 'Fair market value', 'Total value', 'Multiple of cost', 'Gross IRR'],
      data: [
        ['Genesys', '12-2016', 'Oil, Gas & ConsumableFuels', '-', '12.10%', '$7.00', '$7.00', '-', '$7.0', '$7.0', '1.00%', '-'],
        ['Treasury Tech', '01-2017', 'Leisure Equipment & Products', '-', '12.10%', '$7.00', '$7.00', '-', '$7.0', '$7.0', '1.00%', '-'],
        ['RS Education', '01-2018', 'Diversfied Consumer Services', '-', '12.10%', '$7.00', '$7.00', '-', '$7.0', '$7.0', '1.00%', '-'],
        ['SR insurance Technology', '05-2018', 'Insurance', '-', '12.10%', '$7.00', '$7.00', '-', '$7.0', '$7.0', '1.00%', '-'],
        ['Syntec Automation', '07-2018', 'Construction Materials', '-', '12.10%', '$7.00', '$7.00', '-', '$7.0', '$7.0', '1.00%', '-'],
        ['Tinker Technologies', '10-2018', 'Internet Software & Services', '-', '12.10%', '$7.00', '$7.00', '-', '$7.0', '$7.0', '1.00%', '-'],
        ['TSM Healthcare', '02-2019', 'Health Care Equipment & Supplies', '-', '12.10%', '$7.00', '$7.00', '-', '$7.0', '$7.0', '1.00%', '-'],
        ['WD', '11-2019', 'Computers & Peripherals', '-', '12.10%', '$7.00', '$7.00', '-', '$7.0', '$7.0', '1.00%', '-'],
      ],
    };
  }
}

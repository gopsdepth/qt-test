import { Component, Input } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { FundPerformanceService } from '../fund-performance.service';

@Component({
  selector: 'app-investments',
  templateUrl: './investments.component.html',
  styleUrls: ['./investments.component.css']
})
export class InvestmentsComponent {
  private _date = new Date();
  get date(): Date {
    return this._date;
  }

  @Input('date')
  set date(val: Date) {
    this._date = val;

    this.ngOnInit();
  }

  data: any;
  chartType = ChartType.LineChart;
  chartColumn: any[] = [];
  chartOptions = {
    responsive: true,
    chartArea: { left: 0, right: 0 },
    legend: { position: 'bottom' },
    pointSize: 5,
  };

  constructor(private readonly service: FundPerformanceService) {}

  ngOnInit() {
    const { columns, data } = this.service.getInvestmentData();
    this.data = data;
    this.chartColumn = columns;
  }
}

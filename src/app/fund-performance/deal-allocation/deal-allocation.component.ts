import { Component, Input } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { FundPerformanceService } from '../fund-performance.service';

@Component({
  selector: 'app-deal-allocation',
  templateUrl: './deal-allocation.component.html',
  styleUrls: ['./deal-allocation.component.css']
})
export class DealAllocationComponent {
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
  chartType = ChartType.PieChart;
  chartColumn: any[] = [];
  chartOptions = {
    responsive: true,
    chartArea: { left: 0, right: 0 },
    pieHole: 0.4,
    pieSliceTextStyle: {
      color: 'white',
    },
  };
  selectedFilter: 'sector' | 'industry' = 'sector';

  constructor(private readonly service: FundPerformanceService) {}

  ngOnInit() {
    const { columns, data } = this.service.getDealAllocationData();
    this.data = data;
    this.chartColumn = columns;
  }

  getButtonClass(filter: string) {
    if (this.selectedFilter == filter) {
      return 'text-white bg-blue-800';
    } else {
      return 'text-blue-800 bg-white';
    }
  }

  buttonClick(filter: 'sector' | 'industry') {
    this.selectedFilter = filter;
  }
}

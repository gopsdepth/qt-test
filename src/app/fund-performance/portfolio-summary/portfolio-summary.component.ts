import { Component } from '@angular/core';
import { FundPerformanceService } from '../fund-performance.service';

@Component({
  selector: 'app-portfolio-summary',
  templateUrl: './portfolio-summary.component.html',
  styleUrls: ['./portfolio-summary.component.css']
})
export class PortfolioSummaryComponent {
  columns: string[] = [];
  data: any[] = [];
  selectedFilter: 'deal' | 'asset' = 'deal';

  constructor(private readonly service: FundPerformanceService) {}

  ngOnInit() {
    const { columns, data } = this.service.getPortfolioData();
    this.columns = columns;
    this.data = data;
  }

  getButtonClass(filter: string) {
    if (this.selectedFilter == filter) {
      return 'text-white bg-blue-800';
    } else {
      return 'text-blue-800 bg-white';
    }
  }

  buttonClick(filter: 'deal' | 'asset') {
    this.selectedFilter = filter;
  }
}

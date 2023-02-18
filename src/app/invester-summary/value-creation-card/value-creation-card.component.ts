import { Component, Input } from '@angular/core';
import { ChartType } from 'angular-google-charts';
import { InvesterSummaryService } from '../invester-summary.service';

@Component({
  selector: 'app-value-creation-card',
  templateUrl: './value-creation-card.component.html',
  styleUrls: ['./value-creation-card.component.css']
})
export class ValueCreationCardComponent {
  private _quater = '';
  get quater(): string {
    return this._quater;
  }

  @Input('quater')
  set quater(val: string) {
    this._quater = val;

    this.ngOnInit();
  }
  
  data: any;
  chartType = ChartType.ColumnChart;
  chartColumn: any[] = [];
  chartOptions = {
    responsive: true,
    legend: { position: 'top', alignment: 'start' },
    colors: ['#107FC9', '#0E4EAD'],
    isStacked: true,
  };

  constructor(private readonly service: InvesterSummaryService) {}

  ngOnInit() {
    const { columns, data } = this.service.getValueCreation(this.quater);
    this.data = data;
    this.chartColumn = columns;
  }
}

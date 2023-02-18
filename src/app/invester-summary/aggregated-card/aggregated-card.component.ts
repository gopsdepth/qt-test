import { Component, Input } from '@angular/core';
import { InvesterSummaryService } from '../invester-summary.service';

@Component({
  selector: 'app-aggregated-card',
  templateUrl: './aggregated-card.component.html',
  styleUrls: ['./aggregated-card.component.css']
})
export class AggregatedCardComponent {
  private _quater = '';
  get quater(): string {
    return this._quater;
  }

  @Input('quater')
  set quater(val: string) {
    this._quater = val;

    this.ngOnInit();
  }
  
  columns: string[] = [];
  data: any[] = [];

  constructor(private readonly service: InvesterSummaryService) {}

  ngOnInit() {
    const { columns, data } = this.service.getAggregatedData(this.quater);
    this.columns = columns;
    this.data = data;
  }
}

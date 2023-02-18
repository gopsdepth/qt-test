import { Component, Input } from '@angular/core';
import { InvesterSummaryService } from '../invester-summary.service';

@Component({
  selector: 'app-performance-card',
  templateUrl: './performance-card.component.html',
  styleUrls: ['./performance-card.component.css']
})
export class PerformanceCardComponent {
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
    const { columns, data } = this.service.getPerformanceData(this.quater);
    this.columns = columns;
    this.data = data;
  }
}

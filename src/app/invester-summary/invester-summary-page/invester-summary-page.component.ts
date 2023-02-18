import { Component, ElementRef } from '@angular/core';
import { InvesterSummaryService } from '../invester-summary.service';

@Component({
  selector: 'app-invester-summary-page',
  templateUrl: './invester-summary-page.component.html',
  styleUrls: ['./invester-summary-page.component.css']
})
export class InvesterSummaryPageComponent {
  currencyOptions: string[] = [];
  quaterOptions: string[] = [];
  selectedQuater = '';

  constructor(private readonly elementRef: ElementRef,
    private readonly service: InvesterSummaryService) {}

  ngOnInit() {
    this.currencyOptions = this.service.getCurrencies();
    this.quaterOptions = this.service.getQuaters();
    this.selectedQuater = this.quaterOptions[0];
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.className = 'bg-slate-200';
  }
}

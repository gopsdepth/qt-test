import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-invester-summary-page',
  templateUrl: './invester-summary-page.component.html',
  styleUrls: ['./invester-summary-page.component.css']
})
export class InvesterSummaryPageComponent {
  constructor(private readonly elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.className = 'bg-slate-200';
  }
}

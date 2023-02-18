import { Component, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FundPerformanceService } from '../fund-performance.service';

@Component({
  selector: 'app-fund-performance-page',
  templateUrl: './fund-performance-page.component.html',
  styleUrls: ['./fund-performance-page.component.css'],
})
export class FundPerformancePageComponent {
  fundUrlId = '';
  selectedDate = new Date();
  fundName = '';

  constructor(
      private readonly route: ActivatedRoute,
      private readonly router: Router,
      private readonly elementRef: ElementRef,
      private readonly service: FundPerformanceService,
  ) {}

  ngOnInit() {
    this.fundUrlId = this.route.snapshot.paramMap.get("id") || '';
    if (!this.fundUrlId) this.router.navigate(['invest-summary']);

    this.route.url.subscribe((val) => {
      this.fundUrlId = val[0].parameterMap.get('id') || '';
      this.fundName = this.service.getFundName(this.fundUrlId);
    });

    this.fundName = this.service.getFundName(this.fundUrlId);
  }

  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.className = 'bg-slate-200';
  }
}

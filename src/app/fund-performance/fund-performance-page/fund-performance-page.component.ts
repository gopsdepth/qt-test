import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fund-performance-page',
  templateUrl: './fund-performance-page.component.html',
  styleUrls: ['./fund-performance-page.component.css'],
})
export class FundPerformancePageComponent {
  fundUrlId: string = '';

  constructor(
      private readonly route: ActivatedRoute,
      private readonly router: Router,
  ) {}

  ngOnInit() {
    // this.navEnd.subscribe((value) => this.updateFundId(value));
    this.fundUrlId = 'fund-perf/' + this.route.snapshot.paramMap.get("id") || '';
    if (!this.fundUrlId) this.router.navigate(['invest-summary']);

    this.route.url.subscribe((val) => {
      this.fundUrlId = 'fund-perf/' + val[0].parameterMap.get('id') || '';
    });
  }
}

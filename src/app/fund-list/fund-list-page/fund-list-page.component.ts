import { Component, ElementRef } from '@angular/core';
import { FundCardModel } from '../../models/fund-card.model';
import { FundListService } from '../fund-list.service';

@Component({
  selector: 'app-fund-list-page',
  templateUrl: './fund-list-page.component.html',
  styleUrls: ['./fund-list-page.component.css']
})
export class FundListPageComponent {
  data: FundCardModel[];

  constructor(fundListService: FundListService,
    private readonly elementRef: ElementRef) {
    this.data = fundListService.getData();
  }
  
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument
        .body.className = 'bg-slate-200';
  }
}

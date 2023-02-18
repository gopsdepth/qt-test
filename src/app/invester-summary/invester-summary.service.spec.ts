import { TestBed } from '@angular/core/testing';

import { InvesterSummaryService } from './invester-summary.service';

describe('InvesterSummaryService', () => {
  let service: InvesterSummaryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InvesterSummaryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

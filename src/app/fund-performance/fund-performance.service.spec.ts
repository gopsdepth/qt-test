import { TestBed } from '@angular/core/testing';

import { FundPerformanceService } from './fund-performance.service';

describe('FundPerformanceService', () => {
  let service: FundPerformanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundPerformanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

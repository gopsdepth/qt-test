import { TestBed } from '@angular/core/testing';

import { FundListService } from './fund-list.service';

describe('FundListService', () => {
  let service: FundListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FundListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

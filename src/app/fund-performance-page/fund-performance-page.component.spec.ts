import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundPerformancePageComponent } from './fund-performance-page.component';

describe('FundPerformancePageComponent', () => {
  let component: FundPerformancePageComponent;
  let fixture: ComponentFixture<FundPerformancePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundPerformancePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundPerformancePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

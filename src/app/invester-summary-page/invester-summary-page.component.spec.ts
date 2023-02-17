import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvesterSummaryPageComponent } from './invester-summary-page.component';

describe('InvesterSummaryPageComponent', () => {
  let component: InvesterSummaryPageComponent;
  let fixture: ComponentFixture<InvesterSummaryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvesterSummaryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvesterSummaryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

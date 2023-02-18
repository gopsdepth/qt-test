import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggregatedCardComponent } from './aggregated-card.component';

describe('AggregatedCardComponent', () => {
  let component: AggregatedCardComponent;
  let fixture: ComponentFixture<AggregatedCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AggregatedCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AggregatedCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

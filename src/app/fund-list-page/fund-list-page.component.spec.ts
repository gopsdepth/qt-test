import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FundListPageComponent } from './fund-list-page.component';

describe('FundListPageComponent', () => {
  let component: FundListPageComponent;
  let fixture: ComponentFixture<FundListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FundListPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FundListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

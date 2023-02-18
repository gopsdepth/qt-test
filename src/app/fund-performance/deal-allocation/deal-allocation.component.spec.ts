import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DealAllocationComponent } from './deal-allocation.component';

describe('DealAllocationComponent', () => {
  let component: DealAllocationComponent;
  let fixture: ComponentFixture<DealAllocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DealAllocationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DealAllocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

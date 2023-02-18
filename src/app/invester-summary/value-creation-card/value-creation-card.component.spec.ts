import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValueCreationCardComponent } from './value-creation-card.component';

describe('ValueCreationCardComponent', () => {
  let component: ValueCreationCardComponent;
  let fixture: ComponentFixture<ValueCreationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValueCreationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValueCreationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

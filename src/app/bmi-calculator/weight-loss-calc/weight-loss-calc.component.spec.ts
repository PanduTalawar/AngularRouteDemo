import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightLossCalcComponent } from './weight-loss-calc.component';

describe('WeightLossCalcComponent', () => {
  let component: WeightLossCalcComponent;
  let fixture: ComponentFixture<WeightLossCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightLossCalcComponent]
    });
    fixture = TestBed.createComponent(WeightLossCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

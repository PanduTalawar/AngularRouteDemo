import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexCalcComponent } from './index-calc.component';

describe('IndexCalcComponent', () => {
  let component: IndexCalcComponent;
  let fixture: ComponentFixture<IndexCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IndexCalcComponent]
    });
    fixture = TestBed.createComponent(IndexCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

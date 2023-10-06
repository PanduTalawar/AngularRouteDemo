import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsCalcComponent } from './kids-calc.component';

describe('KidsCalcComponent', () => {
  let component: KidsCalcComponent;
  let fixture: ComponentFixture<KidsCalcComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KidsCalcComponent]
    });
    fixture = TestBed.createComponent(KidsCalcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

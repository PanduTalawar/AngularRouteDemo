import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmydashboardComponent } from './armydashboard.component';

describe('ArmydashboardComponent', () => {
  let component: ArmydashboardComponent;
  let fixture: ComponentFixture<ArmydashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArmydashboardComponent]
    });
    fixture = TestBed.createComponent(ArmydashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

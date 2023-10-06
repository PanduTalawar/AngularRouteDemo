import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SleepDashboardComponent } from './sleep-dashboard.component';

describe('SleepDashboardComponent', () => {
  let component: SleepDashboardComponent;
  let fixture: ComponentFixture<SleepDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SleepDashboardComponent]
    });
    fixture = TestBed.createComponent(SleepDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

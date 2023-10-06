import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartRateDashboardComponent } from './heart-rate-dashboard.component';

describe('HeartRateDashboardComponent', () => {
  let component: HeartRateDashboardComponent;
  let fixture: ComponentFixture<HeartRateDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeartRateDashboardComponent]
    });
    fixture = TestBed.createComponent(HeartRateDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

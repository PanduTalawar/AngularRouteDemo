import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DaietryDashboardComponent } from './daietry-dashboard.component';

describe('DaietryDashboardComponent', () => {
  let component: DaietryDashboardComponent;
  let fixture: ComponentFixture<DaietryDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DaietryDashboardComponent]
    });
    fixture = TestBed.createComponent(DaietryDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

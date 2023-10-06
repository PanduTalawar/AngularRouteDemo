import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SleepDashboardComponent } from './sleep-dashboard/sleep-dashboard.component';



@NgModule({
  declarations: [
    SleepDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[SleepDashboardComponent]
})
export class SleepCalculatorsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeartRateDashboardComponent } from './heart-rate-dashboard/heart-rate-dashboard.component';



@NgModule({
  declarations: [
    HeartRateDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[HeartRateDashboardComponent]
})
export class HeartRateCalculatorModule { }

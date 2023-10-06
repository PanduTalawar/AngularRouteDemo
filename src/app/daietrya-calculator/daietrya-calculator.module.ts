import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DaietryDashboardComponent } from './daietry-dashboard/daietry-dashboard.component';



@NgModule({
  declarations: [
    DaietryDashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[DaietryDashboardComponent]
})
export class DaietryaCalculatorModule { }

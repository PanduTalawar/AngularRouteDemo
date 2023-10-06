import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArmydashboardComponent } from './armydashboard/armydashboard.component';



@NgModule({
  declarations: [
    ArmydashboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[ArmydashboardComponent]
})
export class ArmyCalculatorModule { }

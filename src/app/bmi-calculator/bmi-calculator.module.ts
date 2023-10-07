import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BmiDashboardComponent } from './bmi-dashboard/bmi-dashboard.component';
import { RouterModule } from '@angular/router';
import { IndexCalcComponent } from './index-calc/index-calc.component';
import { KidsCalcComponent } from './kids-calc/kids-calc.component';
import { WeightLossCalcComponent } from './weight-loss-calc/weight-loss-calc.component';
import { BmiRoutingModule } from './bmi-routing.module';


@NgModule({
  declarations: [
    BmiDashboardComponent,
    IndexCalcComponent,
    KidsCalcComponent,
    WeightLossCalcComponent
  ],
  imports: [
    CommonModule,
    BmiRoutingModule
  ],
  exports:[BmiDashboardComponent]
})
export class BmiCalculatorModule { }

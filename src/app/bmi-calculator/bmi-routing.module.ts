import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BmiDashboardComponent } from './bmi-dashboard/bmi-dashboard.component';
import { IndexCalcComponent } from './index-calc/index-calc.component';
import { KidsCalcComponent } from './kids-calc/kids-calc.component';
import { WeightLossCalcComponent } from './weight-loss-calc/weight-loss-calc.component';

const bmiPaths: Routes = [
  { path: '', redirectTo: 'db', pathMatch: 'full' },
  {
    path: 'db',
    component: BmiDashboardComponent,
    children: [
      { path: 'index', component: IndexCalcComponent },
      { path: 'kids', component: KidsCalcComponent },
      { path: 'weight', component: WeightLossCalcComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(bmiPaths)],
  exports: [RouterModule],
})
export class BmiRoutingModule {}

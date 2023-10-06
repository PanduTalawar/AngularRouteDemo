import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCalculatorsDashboardComponent } from './main-calculators-dashboard/main-calculators-dashboard.component';
import { SleepDashboardComponent } from './sleep-calculators/sleep-dashboard/sleep-dashboard.component';
import { DaietryDashboardComponent } from './daietrya-calculator/daietry-dashboard/daietry-dashboard.component';
import { ArmydashboardComponent } from './army-calculator/armydashboard/armydashboard.component';
import { HeartRateDashboardComponent } from './heart-rate-calculator/heart-rate-dashboard/heart-rate-dashboard.component';
import { BmiDashboardComponent } from './bmi-calculator/bmi-dashboard/bmi-dashboard.component';
import { IndexCalcComponent } from './bmi-calculator/index-calc/index-calc.component';
import { KidsCalcComponent } from './bmi-calculator/kids-calc/kids-calc.component';
import { WeightLossCalcComponent } from './bmi-calculator/weight-loss-calc/weight-loss-calc.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [

  {path:"",redirectTo:"home",pathMatch:"full"},

  { path:"home",component:HomeComponent},

  { path:"health",component:MainCalculatorsDashboardComponent},

  { path:"bmi",component:BmiDashboardComponent,
     children:[
      {path:"",component:IndexCalcComponent},
      {path:"index",component:IndexCalcComponent},
      {path:"kids",component:KidsCalcComponent},
      {path:"weight",component:WeightLossCalcComponent}
    ]
  },

  { path:"heart",component:HeartRateDashboardComponent},

  { path:"army",component:ArmydashboardComponent},

  { path:"sleep",component:SleepDashboardComponent},
  
  { path:"dietry",component:DaietryDashboardComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

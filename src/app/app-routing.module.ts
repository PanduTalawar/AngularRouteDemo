import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainCalculatorsDashboardComponent } from './main-calculators-dashboard/main-calculators-dashboard.component';
import { SleepDashboardComponent } from './sleep-calculators/sleep-dashboard/sleep-dashboard.component';
import { DaietryDashboardComponent } from './daietrya-calculator/daietry-dashboard/daietry-dashboard.component';
import { ArmydashboardComponent } from './army-calculator/armydashboard/armydashboard.component';
import { HeartRateDashboardComponent } from './heart-rate-calculator/heart-rate-dashboard/heart-rate-dashboard.component';
import { HomeComponent } from './home/home.component';
import { canActivateTeam } from './route-guard/autenticateRouteGuard';
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },

  {
    path: 'health',
    component: MainCalculatorsDashboardComponent,
    canActivate: [canActivateTeam],
  },

  { path:"bmi",loadChildren:() => import('./bmi-calculator/bmi-calculator.module').then(m=> m.BmiCalculatorModule)},

  { path: 'heart', component: HeartRateDashboardComponent },

  { path: 'army', component: ArmydashboardComponent },

  { path: 'sleep', component: SleepDashboardComponent },

  { path: 'dietry', component: DaietryDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

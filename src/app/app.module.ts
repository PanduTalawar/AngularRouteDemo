import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainCalculatorsDashboardComponent } from './main-calculators-dashboard/main-calculators-dashboard.component';
import { SleepCalculatorsModule } from './sleep-calculators/sleep-calculators.module';
import { ArmyCalculatorModule } from './army-calculator/army-calculator.module';
import { DaietryaCalculatorModule } from './daietrya-calculator/daietrya-calculator.module';
import { HeartRateCalculatorModule } from './heart-rate-calculator/heart-rate-calculator.module';
import { HomeComponent } from './home/home.component';
import { AccountsModule } from './accounts/accounts.module';

@NgModule({
  declarations: [
    AppComponent,
    MainCalculatorsDashboardComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SleepCalculatorsModule,
    ArmyCalculatorModule,
    DaietryaCalculatorModule,
    HeartRateCalculatorModule,
    AccountsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

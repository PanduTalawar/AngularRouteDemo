import { ChangeDetectionStrategy } from '@angular/core';
import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-bmi-dashboard',
  templateUrl: './bmi-dashboard.component.html',
  styleUrls: ['./bmi-dashboard.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BmiDashboardComponent implements OnInit,AfterViewInit{

  activeCalculator:string ="None";

  constructor(public communicServic:CommunicationService){  }

  ngOnInit(): void {
    this.communicServic.registerMsg().subscribe((mesg:string)=>{
      this.activeCalculator = mesg;
   });
  }

  ngAfterViewInit(): void {
  //   this.communicServic.registerMsg().subscribe((mesg:string)=>{
  //     this.activeCalculator = mesg;
  //  });
  }

}

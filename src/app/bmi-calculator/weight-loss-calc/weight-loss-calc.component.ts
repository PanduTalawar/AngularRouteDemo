import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-weight-loss-calc',
  templateUrl: './weight-loss-calc.component.html',
  styleUrls: ['./weight-loss-calc.component.css']
})
export class WeightLossCalcComponent {
  constructor(public comService:CommunicationService){}

  ngOnInit(): void {
      this.comService.pulishMesg("Weight-Loss-Calculator");
  }
}

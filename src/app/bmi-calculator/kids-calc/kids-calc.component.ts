import { Component } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-kids-calc',
  templateUrl: './kids-calc.component.html',
  styleUrls: ['./kids-calc.component.css']
})
export class KidsCalcComponent {

  constructor(public comService:CommunicationService){}

  ngOnInit(): void {
      this.comService.pulishMesg("Kids-Calculator");
  }
}

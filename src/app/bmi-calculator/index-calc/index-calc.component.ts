import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-index-calc',
  templateUrl: './index-calc.component.html',
  styleUrls: ['./index-calc.component.css']
})
export class IndexCalcComponent implements OnInit{

  constructor(public comService:CommunicationService){}

  ngOnInit(): void {
      this.comService.pulishMesg("B Index Calculator");
  }

}

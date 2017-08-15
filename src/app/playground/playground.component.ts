import { Component, OnInit } from '@angular/core';
import { OperatorsService } from '../operators.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.css']
})
export class PlaygroundComponent implements OnInit {

  constructor(public operatorData: OperatorsService) { }

  ngOnInit() {
  }

}

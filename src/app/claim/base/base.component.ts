import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-claim-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class ClaimBaseComponent implements OnInit {

  name:string="Harry Styles";
  insuranceNum:string="AB12345678"
  carInfo:string="Toyota Camry 1GLJ-752";
  state:string="claim";
  
  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, Input, OnInit } from '@angular/core';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

      firstName:string="...something...";
      lastName:string="...something...";
      gender:string="...something...";
      nationality:string="...something...";
      idCard:string="...something...";
      passport:string="...something...";
      email:string="...something...";
      birth:string="...something...";
      phone:string="...something...";
      carRegist:string="...something...";
      brand:string="...something...";
      year:string="...something...";
      chassiNum:string="...something...";
      insurranceNum:string="...something...";
      occupation:string="...something..."

  constructor() {
   }

  ngOnInit(): void {
  }

}

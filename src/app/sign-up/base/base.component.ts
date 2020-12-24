import { Component, Input, OnInit } from '@angular/core';
import { RegisterInfo } from '../register-info';

@Component({
  selector: 'app-signup-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  @Input()
  firstnameip:string='';
  @Input()
  lastnameip:string='';
  @Input()
  emailip:string='';
  @Input()
  insuranceip:string='';
  @Input()
  newpassip:string='';
  @Input()
  confirmip:string='';

  info: RegisterInfo[];
  constructor() {
    this.info = [];   
    }

  ngOnInit(): void {
  }
  push(){
    this.info.push(
      {
        firstName: this.firstnameip,
        lastName: this.lastnameip,
        email: this.emailip,
        insuranceNum: this.insuranceip,
        newPassword: this.newpassip,
        comfirmPassword: this.confirmip
      });
      console.log(this.info)
  }

}

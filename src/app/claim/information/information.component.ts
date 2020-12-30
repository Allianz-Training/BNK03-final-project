import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {

      firstName:string="loading...";
      lastName:string="loading...";
      gender:string="loading...";
      nationality:string="loading...";
      idCard:string="loading...";
      passport:string="loading...";
      email:string="loading...";
      birth:string="loading...";
      phone:string="loading...";
      carRegist:string="loading...";
      brand:string="loading...";
      year:string="loading...";
      chassiNum:string="loading...";
      insurranceNum:string="loading...";
      occupation:string="loading..."

  constructor(private dataService: DataService) {
   }

  ngOnInit(): void {
    this.dataService.testGet("/user/information/123456789012").subscribe((data:any) => {
      console.log(data.message);
      
      this.firstName = data.message.firstName;
      this.lastName = data.message.lastName;
      this.gender = data.message.gender;
      // this.nationality = data.
      // this.idCard = data.
      // this.passport = data.
      // this.email = data.
      // this.birth = data.
      // this.phone = data.
      // this.carRegist = data.
      // this.brand = data.
      // this.year = data.
      // this.chassiNum = data.
      // this.insurranceNum = data.
      // this.occupation = data.
    })
  }

}

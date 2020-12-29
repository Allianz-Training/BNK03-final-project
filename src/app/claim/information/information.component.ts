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
    this.dataService.testGet("/albums").subscribe((data:any) => {
      this.firstName = data[0].title;
    })
  }

}

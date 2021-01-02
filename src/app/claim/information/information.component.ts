import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
// import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css'],
})
export class InformationComponent implements OnInit {
  firstName: string = 'loading...';
  lastName: string = 'loading...';
  gender: string = 'loading...';
  nationality: string = 'loading...';
  idCard: string = 'loading...';
  passport: string = 'loading...';
  email: string = 'loading...';
  birth: string = 'loading...';
  phone: string = 'loading...';
  carRegist: string = 'loading...';
  brand: string = 'loading...';
  year: string = 'loading...';
  chassiNum: string = 'loading...';
  insurranceNum: string = 'loading...';
  occupation: string = 'loading...';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .get('/user/information/' + this.dataService.insuranceAccountNumber)
      .subscribe((data: any) => {
        console.log(data.message);

        this.firstName = data.message.firstName;
        this.lastName = data.message.lastName;
        this.gender = data.message.gender;
        this.nationality = data.message.nationality;
        this.idCard = data.message.idCardNumber;
        this.passport = data.message.passport;
        this.email = data.message.email;
        this.birth = data.message.dateOfBirth;
        this.phone = data.message.phone;
        this.carRegist = data.message.carRegistration;
        this.brand = data.message.brand;
        this.year = data.message.year;
        this.chassiNum = data.message.chassiNumber;
        this.insurranceNum = data.message.insuranceAccountNumber;
        this.occupation = data.message.occupation;
      });
  }
}

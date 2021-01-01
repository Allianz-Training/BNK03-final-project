import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css']
})
export class ShowInfoComponent implements OnInit {

  name: string = 'Harry Styles';
  insuranceNum: string = 'AB12345678';
  carInfo: string = 'Toyota Camry 1GLJ-752';
  state: string = 'claim';
  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService
    .get('/user/information/123456789012')
    .subscribe((data: any) => {
      this.name = data.message.firstName + ' ' + data.message.lastName;
      this.insuranceNum = data.message.insuranceAccountNumber;
      this.carInfo = data.message.brand + ' ' + data.message.year;
      this.state = data.message.claimState;
    });
  }
  thirdPartyClaim() {
    this.dataService.hasThirdParty = true;
  }
}

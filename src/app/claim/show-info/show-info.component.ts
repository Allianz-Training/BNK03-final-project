import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styleUrls: ['./show-info.component.css'],
})
export class ShowInfoComponent implements OnInit {
  name: string = '';
  insuranceNum: string = '';
  carInfo: string = '';
  state: string = '';
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService
      .get('/user/information/' + this.dataService.insuranceAccountNumber, {})
      .subscribe((data: any) => {
        this.name = data.message.firstName + ' ' + data.message.lastName;
        this.insuranceNum = data.message.insuranceAccountNumber;
        this.carInfo = data.message.brand + ' ' + data.message.year;
        this.state = data.message.claimState;
      });
  }
}

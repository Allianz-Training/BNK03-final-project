import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-list-claim',
  templateUrl: './list-claim.component.html',
  styleUrls: ['./list-claim.component.css']
})
export class ListClaimComponent implements OnInit {

  constructor(private dataService : DataService) { }

  ngOnInit(): void {
  }
  thirdPartyClaim() {
    this.dataService.hasThirdParty = true;
  }
}

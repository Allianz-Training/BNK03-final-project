import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
@Component({
  selector: 'app-list-claim',
  templateUrl: './list-claim.component.html',
  styleUrls: ['./list-claim.component.css'],
})
export class ListClaimComponent implements OnInit {
  @Input()
  imgUrl: string = '';
  @Input()
  contentHeader: string = '';
  @Input()
  contentDescription: string = '';
  @Input()
  onClick: string = '';
  @Input()
  route: string = '';

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  thirdPartyClaim() {
    this.dataService.hasThirdParty = true;
    console.log(this.dataService);
  }
  noThirdClaim() {
    console.log('no third');
  }

  check() {
    console.log(this.dataService);
  }
}

import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-homepage-navbar',
  templateUrl: './homepage-navbar.component.html',
  styleUrls: ['./homepage-navbar.component.css'],
})
export class HomepageNavbarComponent implements OnInit {
  @Input()
  routes: Array<any> = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  check() {
    console.log(this.dataService);
  }
}

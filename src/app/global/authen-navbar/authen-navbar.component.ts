import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-authen-navbar',
  templateUrl: './authen-navbar.component.html',
  styleUrls: ['./authen-navbar.component.css'],
})
export class AuthenNavbarComponent implements OnInit {
  @Input()
  routes: Array<any> = [];

  constructor() {}

  ngOnInit(): void {}
}

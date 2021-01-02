import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-in-base',
  templateUrl: './sign-in-base.component.html',
  styleUrls: ['./sign-in-base.component.css'],
})
export class SignInBaseComponent implements OnInit {
  imgUrl: string = '../../../assets/car-insurance.png';
  contentHeader: string = 'Welcome to BNKlaim!';
  test: any = [];

  constructor() {}

  ngOnInit(): void {}
}

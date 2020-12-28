import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class SignInBaseComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  home(){
    this.router.navigate(["home"])
  }
}

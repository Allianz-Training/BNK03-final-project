import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-homepage-navbar',
  templateUrl: './homepage-navbar.component.html',
  styleUrls: ['./homepage-navbar.component.css'],
})
export class HomepageNavbarComponent implements OnInit {
  @Input()
  routes: Array<any> = [];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  backToHome() {
    this.router.navigate(['home']);
  }
}

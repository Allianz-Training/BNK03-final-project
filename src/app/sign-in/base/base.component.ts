import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'sign-in-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class SignInBaseComponent implements OnInit {
  test:any=[];
  constructor(private router: Router, private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.testGet().subscribe((data) => {
      console.log(data);
      this.test = data;
      console.log(this.test);
      
    })    
  }

  home(){
    this.router.navigate(["home"])
  }
}

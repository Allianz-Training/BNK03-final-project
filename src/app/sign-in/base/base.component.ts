import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sign-in-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class SignInBaseComponent implements OnInit {
  test:any=[];
  
  form: FormGroup;

  constructor(private router: Router, private dataService: DataService, private builder: FormBuilder) {
    this.form = this.builder.group({
      userName: ['',[Validators.required]],
      password: ['',[Validators.required]]
   })}

  ngOnInit(): void {

  }

  home(){
    this.router.navigate(["home"])
    console.log(this.form.value)
  }
}

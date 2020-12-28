import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class SignUpBaseComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder,private router: Router) {
    this.form = this.builder.group({
      firstName: [''],
      lastName: [''],
      email: [''],
      insuranceNum: [''],
      newPassword: [''],
      comfirmPassword: ['']
    })
  }

  ngOnInit(): void {
  }
  register() {
    // alert(true);
    this.router.navigate(["/register/otp"])
    console.log(this.form.value)
  }

}

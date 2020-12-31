import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-signup-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class SignUpBaseComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder,private router: Router, private dataService: DataService) {
    this.form = this.builder.group({
      firstName: ['',[Validators.required]],
      lastName: ['',[Validators.required]],
      email: ['',[Validators.email,Validators.required]],
      insuranceNum: ['',[Validators.required]],
      newPassword: ['',[Validators.required]],
      comfirmPassword: ['',[Validators.required]]
    })
  }

  ngOnInit(): void {
  }
  register() {
    // alert(true);
    this.router.navigate(["/register/otp"])
    console.log(this.form.value)

    let formData = this.form.value;
    this.dataService
      .put('/accounts/login', formData, {})
      .subscribe((data: any) => {
        console.log(data);
      });
  }

}

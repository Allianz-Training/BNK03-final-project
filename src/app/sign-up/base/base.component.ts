import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  form: FormGroup;

  constructor(private builder: FormBuilder) {
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
  push() {

    console.log(this.form)
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'sign-in-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css'],
})
export class SignInBaseComponent implements OnInit {
  test: any = [];

  form: FormGroup;

  constructor(
    private router: Router,
    private dataService: DataService,
    private builder: FormBuilder
  ) {
    this.form = this.builder.group({
      email: ['', [Validators.required]],
      temporaryPassword: ['', [Validators.required]],
    });
  }

  ngOnInit(): void {}

  home() {
    let formData = this.form.value;
    this.dataService.post('/accounts/login', formData, {}).subscribe(
      (body: Object) => {
        console.log(body);
        this.router.navigate(['home']);
      },
      (error: HttpErrorResponse) => {
        // this can change to custom message
        alert(error.error.message);
      }
    );
  }
}

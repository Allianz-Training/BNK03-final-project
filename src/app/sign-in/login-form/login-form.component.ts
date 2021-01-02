import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css'],
})
export class LoginFormComponent implements OnInit {
  @Input() imgUrl: string = '';
  @Input() contentHeader: string = '';

  form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private dataService: DataService
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
      (body: any) => {
        console.log(body);
        this.dataService.insuranceAccountNumber = body.insuranceNumber;
        this.dataService.isSignIn = true;
        this.router.navigate(['home']);
      },
      (error: HttpErrorResponse) => {
        // this can change to custom message
        alert(error.error.message);

        /**if(error.error.status == 404<~etc>) {
         *    // do something
         * } else if () {
         *    // do anotherthing
         * } else {}
         *
         */
      }
    );
  }
}

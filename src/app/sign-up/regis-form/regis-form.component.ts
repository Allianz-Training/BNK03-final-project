import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';
import { ConfirmedValidator } from '../confirmed.validator';

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.css'],
})
export class RegisFormComponent implements OnInit {
  public form: FormGroup;

  constructor(
    private builder: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.form = this.builder.group(
      {
        firstName: ['', [Validators.required]],
        lastName: ['', [Validators.required]],
        email: ['', [Validators.email, Validators.required]],
        insuranceAccountNumber: ['', [Validators.required]],
        temporaryPassword: ['', [Validators.required]],
        comfirmPassword: ['', [Validators.required]],
      },
      {
        validator: ConfirmedValidator('temporaryPassword', 'comfirmPassword'),
      }
    );
  }

  ngOnInit(): void {}

  // private confirmedValidator(controlName: string, matchingControlName: string) {
  //   const control = this.formGroup.controls[controlName];
  //   const matchingControl = this.formGroup.controls[matchingControlName];

  //   if (matchingControl.errors && !matchingControl.errors.confirmedValidator) {
  //     return;
  //   }

  //   if (control.value !== matchingControl.value) {
  //     matchingControl.setErrors({ confirmedValidator: true });
  //   } else {
  //     matchingControl.setErrors(null);
  //   }
  // }

  register() {
    let formData = this.form.value;
    this.dataService.put('/accounts/register', formData, {}).subscribe(
      (data: any) => {
        console.log(data);
        this.dataService.insuranceAccountNumber = this.form.value.insuranceAccountNumber;
        console.log(this.dataService);
        this.router.navigate(['/register/otp']);
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
        if (error.status == 409) {
          this.router.navigate(['/login']);
        }
      }
    );
  }
}

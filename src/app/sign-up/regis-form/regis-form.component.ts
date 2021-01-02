import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl,  } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.css']
})
export class RegisFormComponent implements OnInit {
  public form: FormGroup;

  constructor(private formControl: FormControl, private builder: FormBuilder,
    private router: Router,
    private dataService: DataService) { this.form = this.builder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      insuranceAccountNumber: ['', [Validators.required]],
      temporaryPassword: ['', [Validators.required]],
      comfirmPassword: ['', [Validators.required]],
    });}

  ngOnInit(): void {
    this.form = new FormGroup({});
    this.form.addControl('temporaryPassword', new FormControl('', [Validators.required]));
    this.form.addControl('comfirmPassword', new FormControl(
        '', [Validators.compose(
            [Validators.required, this.validateAreEqual.bind(this)]
        )]
    ));
  }
  private validateAreEqual(fieldControl: FormControl) {
    return fieldControl.value === this.form.get("temporaryPassword")!.value ? null : {
        NotEqual: true
    };
}
  register() {
    // alert(true);
    this.router.navigate(['/register/otp']);
    console.log(this.form.value);

    let formData = this.form.value;
    this.dataService
      .put('/accounts/register', formData, {})
      .subscribe((data: any) => {
        console.log(data);
        this.dataService.insuranceAccountNumber = this.form.value.insuranceAccountNumber;
        console.log(this.dataService);
      });
  }
}

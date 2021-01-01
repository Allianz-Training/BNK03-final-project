import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-regis-form',
  templateUrl: './regis-form.component.html',
  styleUrls: ['./regis-form.component.css']
})
export class RegisFormComponent implements OnInit {
  form: FormGroup;

  constructor(private builder: FormBuilder,
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

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpBaseComponent } from './base/sign-up-base.component';
import { OtpComponent } from './otp/otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NavsComponent } from './navs/navs.component';
import { RegisFormComponent } from './regis-form/regis-form.component';

@NgModule({
  declarations: [
    SignUpBaseComponent,
    OtpComponent,
    NavsComponent,
    RegisFormComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [SignUpBaseComponent, OtpComponent],
})
export class SignUpModule {}

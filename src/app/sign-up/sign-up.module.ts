import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpBaseComponent } from './base/sign-up-base.component';
import { OtpComponent } from './otp/otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RegisFormComponent } from './regis-form/regis-form.component';
import { GlobalModule } from '../global/global.module';

@NgModule({
  declarations: [SignUpBaseComponent, OtpComponent, RegisFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    GlobalModule,
  ],
  exports: [SignUpBaseComponent, OtpComponent],
})
export class SignUpModule {}

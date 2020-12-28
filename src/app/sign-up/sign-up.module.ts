import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignUpBaseComponent } from './base/base.component';
import { OtpComponent } from './otp/otp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [SignUpBaseComponent, OtpComponent],
  imports: [CommonModule,FormsModule, ReactiveFormsModule,RouterModule],
  exports: [SignUpBaseComponent, OtpComponent]
})
export class SignUpModule {}

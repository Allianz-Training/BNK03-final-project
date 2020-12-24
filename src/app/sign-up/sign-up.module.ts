import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import { OtpComponent } from './otp/otp.component';
import {FormsModule} from "@angular/forms"

@NgModule({
  declarations: [BaseComponent, OtpComponent],
  imports: [CommonModule,FormsModule],
  exports: [BaseComponent, OtpComponent]
})
export class SignUpModule {}
